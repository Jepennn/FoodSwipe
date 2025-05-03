import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

Deno.serve(async (req: Request) => {

  const API_KEY_RESEND = Deno.env.get("API_KEY_RESEND");

  //Method POST is the only allowed method
  if (req.method === 'POST') {
    const { fromEmail, toEmail } = await req.json();


    if (!fromEmail || !toEmail) {
      return new Response(JSON.stringify({ error: 'Both email addresses are required.' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing Authorization header' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      {
        global: {
          headers: { Authorization: authHeader } //Passing the Authorization header(users-jwt-token) to the Supabase client so we can get the user id from a specific user
        }
      }
    );

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized user' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    // Insert invitation into the database
    const invitationToken = crypto.randomUUID();
    const { data, error } = await supabaseClient
      .from('invitation')
      .insert([
        {
          from_user_id: user.id,
          from_email: fromEmail,
          to_email: toEmail,
          status: 'pending',
          token: invitationToken,
        },
      ]);


    if (error) {
      return new Response(JSON.stringify({ error: error.message, message: 'Failed to with client' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    // TODO: Implement email sending wth resend here

    const { data: emailData, error: emailError } = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY_RESEND}`
      },
      body: JSON.stringify({
          from: 'FoodSwipe <onboarding@resend.dev>',
          to: toEmail,
          subject: 'Invitation to collaborate',
          html: `<div>
          <h1>Invitation to collaborate</h1>
          <p>You have been invited to collaborate with ${fromEmail}</p>
          <p>Click <a href=${`http://localhost:5173/invitation/accept/${invitationToken}`}>here</a> to accept the invitation</p>
          </div>`,
      }),
    });

    if (emailError) {
      return new Response(JSON.stringify({ error: emailError.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: 'Invitation sent successfully!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  }

  //Method not allowed - only POST is allowed
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 405,
  });
});