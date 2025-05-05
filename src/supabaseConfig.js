import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth:{
        storageKey: "foodswipe-auth-token"
    },
});

//This is just for development purposes to be able to access the auth object in the console
window.auth = supabase.auth;
