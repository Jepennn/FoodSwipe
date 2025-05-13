
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
        
        //Check if token is provided else return error
        if (!token) {
            return new Response(JSON.stringify({ error: 'Token is required' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 400,
            });
        }

        console.log('SUPABASE_URL:', Deno.env.get('SUPABASE_URL'));
console.log('SUPABASE_ANON_KEY:', Deno.env.get('SUPABASE_ANON_KEY'));

        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL')!,
            Deno.env.get('SUPABASE_ANON_KEY')!,
        );

        const { data, error } = await supabaseClient
            .from('invitation')
            .select()
            .eq('token', token)
            .single();

        //Check if invitation token exists else return error
        if (error) {
            return new Response(JSON.stringify({ error: error.message, message: 'Failed to find invite token' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 500,
            });
        } 

        //If invitation token exists update status to accepted
         if (data) {
            const { data: updatedData, error: updatedError } = await supabaseClient
            .from('invitation')
            .update({ status: 'accepted' })
            .eq('token', token)
            .single();

            //Check if invitation token exists else return error
            if (updatedError) {
                return new Response(JSON.stringify({ error: updatedError.message, message: 'Failed to accept verfiy token' }), {
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                    status: 500,
                });
            }
            
            return new Response(JSON.stringify({ message: 'Invitation accepted successfully!' }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 200,
            }); 
        }
    }
    
    //This edge function only handles posts methods
    else{
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
            status: 405,
        });
    }
});


    

