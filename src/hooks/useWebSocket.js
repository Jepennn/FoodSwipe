import { useEffect, useRef } from "react";

//TODO: Maybe add the socket in the redux store to be able to re


const url = import.meta.env.VITE_SUPABASE_EDGE_FUNCTION_ENDPOINT + "/Socket";


export function useWebSocket(userID) {

    //Storing socket for reusability when re-rendering
    const socket = useRef(null);

    useEffect(() => {
        try {

            //Getting the jwt token from the local storage
            const tokenString = localStorage.getItem("foodswipe-auth-token");
            const tokenObject = JSON.parse(tokenString);
            const accessToken = tokenObject.access_token;

            console.log("Access token:", accessToken);
            
            socket.current = new WebSocket(url + "?token=" + accessToken);
            console.log("URL:", socket.current.url) //Just checking so the url is working correctly.

            //TODO: Add event listeners for all the events the socket need to handle from the server
            //1. Get a match event
            //2. Disconect event?
            //3. Open event?  
            //4. Error event, eg when like a recipe doesn't work etc?

            socket.current.onopen = () => {

                console.log("WebSocket connection opened, for user: ", userID);

            };

            //TODO: Implements the functionality for the message that needs to be handled from the server
            //INPROGRESS: 
            socket.current.onmessage = (event) => {

                const data = JSON.parse(event.data);
                console.log("Message from server:", data);

                //TODO: Handle the events from the server
                switch (data.type) {
                    case "recipe-match":
                        console.log("Match found:", data);
                        break;
                    default:
                        console.log("Unknown message type:", data);
                        break;
                }
            };

            //Close event
            socket.current.onclose = () => {
                console.log("WebSocket connection closed");
            };

            
            //TODO: Implement logic for error events: use a switch to handle different error types and display a toast notification?
            socket.current.onerror = (error) => {
                console.log("WebSocket error:", error);
            };

        } catch (error) {
            console.log("Error:", error);
        }
    }, []);
    

    //TODO: Implement emit functions here that emits events to the socket and return them in the hook¨
    //1: like event
    //2: dislike event
    //3: more? 

    //Send liked recipe event:
    function sendLikeRecipeEvent(recipeId) {
        socket.current.send(JSON.stringify({ type: "like-recipe", recipeId }));
    }
    
    
    return { sendLikeRecipeEvent };
}
    
