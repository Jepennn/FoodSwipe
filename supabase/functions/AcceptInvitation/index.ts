import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";


// This edge function is used to accept an invitation and update the database to
//connect the two users

Deno.serve(async (req) => {


    if(req.method === 'OPTIONS'){
        return new Response(null, {
            headers: {
                ...corsHeaders
            },
            status: 204,
        });
    }

    if (req.method === 'POST') {

        const body = await req.json();
        const { token, inviter_user_id } = body;

        // Kontrollera att nödvändiga fält finns
        if (!token) {
            return new Response(JSON.stringify({ error: 'Token is required' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 400,
            });
        } else if (!inviter_user_id) {
            return new Response(JSON.stringify({ error: 'Inviter user id is required' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 400,
            });
        }

        const authHeader = req.headers.get('Authorization')?.replace('Bearer ', '');

        if (!authHeader) {
            return new Response(JSON.stringify({ error: 'Authorization header missing' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 401,
            });
        }

        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL')!,
            Deno.env.get('SUPABASE_ANON_KEY')!,
            {
                global: {
                    headers: { Authorization: "Bearer " + authHeader }
                }
            }
        );

        const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
        if (userError || !user) {
            return new Response(JSON.stringify({ error: 'Unauthorized user' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 401,
            });
        }

        // Anropa databasfunktionen med RPC
        const { error: rpcError } = await supabaseClient.rpc('accept_invitation_transaction', {
            invitation_token: token,
            inviter_user_id: inviter_user_id,
            accepter_user_id: user.id
        });

        if (rpcError) {
            console.error("Error accepting invitation:", rpcError);
            return new Response(JSON.stringify({ error: rpcError.message, message: 'Transaction failed' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 500,
            });
        }

        return new Response(JSON.stringify({ message: 'Invitation accepted successfully!' }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
            status: 200,
        });
    }
    
    //This edge function only handles posts methods
    else{
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
            status: 405,
        });
    }
});
