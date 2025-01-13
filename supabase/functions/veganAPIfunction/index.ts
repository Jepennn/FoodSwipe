// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

//API keys for the vegan API
const apiKeyVegan = Deno.env.get("API_KEY_VEGAN");
const apiHostVegan = Deno.env.get("API_HOST_VEGAN");

//Function to handle request for vegan API
Deno.serve(async (req) => {
  try {
    const url = "https://the-vegan-recipes-db.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKeyVegan,
        "x-rapidapi-host": apiHostVegan,
      },
    };

    // Gör förfrågan till API:et
    const response = await fetch(url, options);

    // Kontrollera om svaret är lyckat
    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch data from the vegan API",
          status: response.status,
        })
      );
    }

    // Läs API:ets svar och returnera det som JSON
    const result = await response.json();

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching from the Vegan API:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/veganAPIfunction' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
