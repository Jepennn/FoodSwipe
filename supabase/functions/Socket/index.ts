
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";


const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
);

// Deno.serve(async (req) => {


Deno.serve(async (req) => {

    const upgrade = req.headers.get("upgrade") || "";

    if (upgrade.toLowerCase() != "websocket") {
        return new Response("Request is not trying to upgrade to WebSocket.", { status: 400 });
    }

    const url = new URL(req.url);
    const token = url.searchParams.get("token");


    if (!token) {
        return new Response(null, { status: 403, message:"Token is required" });
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser(token); //Checks if user is logged in

    if (userError || !user) {
        return new Response(null, { status: 401, message:"Unauthorized user" });
    }

    //If token is valid we open the socket to the client. 
    const { socket, response } = Deno.upgradeWebSocket(req);
    console.log("User is authenticated and socket is opened");
    

    //Logic for the onopen event that is executed when a user connects to the socket
    socket.onopen = async() => {

        //Implement logic here so if a user already has a table just change the active state to true
        const { data: existingUser, error: existingUserError } = await supabase.from("active_users").select().eq("user_id", user.id).single();

        if (existingUserError) {
            console.log("Error selecting active user, user may not been connected before:", existingUserError);
        }

        //If user have been connected before we just update the active state to true
        if (existingUser) {

            const { data, error } = await supabase.from("active_users").update({is_online: true}).eq("user_id", user.id).eq("is_online", false).single();

            if (error) {
                console.log("Error updating active user:", error);
            }
            console.log("Activity for the user updated successfully to active");

        } 
        //If user have never been connected before we insert a new row
        else {
            const { data, error } = await supabase.from("active_users").insert({ user_id: user.id, is_online: true});

            if (error) {
                console.log("Error inserting active user:", error);
            }
            console.log("Active user inserted successfully");
        }
    }


    //TODO: Implement the logic for the different events that needs to be handled implement with help of a switch case.
    socket.onmessage = (e) => { console.log("Received message:", e.data); socket.send(`Echo: ${e.data}`);};



    //TODO: Implement logic for the onclose event, probably update the active user table to false
    socket.onclose = async () => {

        const { data, error } = await supabase.from("active_users")
        .update({
            is_online: false
        })
        .eq("user_id", user.id)
        .eq("is_online", true)
        .single();

        if (error) {
            console.log("Error updating active user:", error);
        }

        console.log("Activity for the user updated successfully");
    };

    //TODO: Implement logic for the onerror event
    socket.onerror = (e) => console.log("WebSocket error:", e.message);

    return response;
});

    // Deno.serve((req) => {

    //     const upgrade = req.headers.get("upgrade") || "";


    //     if (upgrade.toLowerCase() != "websocket") {
    //       return new Response("Request is not trying to upgrade to WebSocket.", { status: 400 });
    //     }


    //     const { socket, response } = Deno.upgradeWebSocket(req);
    
    //     socket.onopen = async (authDetails) => {

    //         console.log("Auth details:", authDetails);

    //     };


    //     socket.onmessage = (e) => {
    //       console.log("Received message:", e.data);
    //       socket.send(`Echo: ${e.data}`);
    //     };


    //     socket.onclose = () => console.log("WebSocket connection closed")
    //     console.log("Hello from onClose event")
    //     return response;

    //   });


    // if (req.headers.get("upgrade") != "websocket") {
    //     return new Response(null, { status: 501 });
    //   }
      
    //   const { socket, response } = Deno.upgradeWebSocket(req);
    //   console.log(response)

    //   socket.onopen = (authObject) => {

    //       //TODO: store session in database so we can se that the user is online.
    //       console.log("WebSocket connection opened");
    //       console.log("Auth object:", authObject);
    //   };
  
    //   socket.onmessage = (event) => {
    //       console.log("WebSocket message received:", event.data);
    //   };
  
    //   socket.onclose = () => {
    //       console.log("WebSocket connection closed");
    //   };
    // const { socket, response } = Deno.upgradeWebSocket(req);
    // if (!token) {
    //     return new Response(null, { status: 403, message:"Token is required" });
    // }

    // const { data: { user }, error: userError } = await supabase.auth.getUser(token); //Checks if user is logged in
    // if (userError || !user) {
    //     return new Response(null, { status: 401, message:"Unauthorized user" });
    // }



    //Event that the backend need to handle
    //1. Like/save a recipe
    //2. Dislike/unsave a recipe ???

    //Events that the frontend need to handle
    //1. React on a match 
    

    //TODO: Build server socket as a separate class to handle all the events?
    // const serverSocket = new serverSocket(socket);
      
//     return response;

// });