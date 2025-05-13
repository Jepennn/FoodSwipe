import { supabase } from "../supabaseConfig.js";


export const logoutUser = async () => {

    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log("Error logging out", error);
        throw new Error(error);
    }

    return "Logged out successfully"
};