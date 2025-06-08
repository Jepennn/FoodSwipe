import { supabase } from "../supabaseConfig";


//A user can both be an inviter and a accepter, fetches all rows where the user is either the inviter or the accepter
export const getCollaborations = async (userId) => {
    const { data, error } = await supabase
    .from('collaborations')
    .select('*')
    .or(`intviter_user_id.eq.${userId},accepter_user_id.eq.${userId}`);

    

    //All the user_ids of the users that are collaborators
    const collaboraterIds = data.map((id) => id.accepter_user_id !== userId ? id.accepter_user_id : id.intviter_user_id);
    console.log("Collaborater IDs", collaboraterIds);

    //Get all the users emails from the user table that isn't the current use
    const { data: userEmails, error: userEmailsError } = await supabase.from('users').select('email').eq('id', collaboraterIds[0]);
    console.log("User emails", userEmails);

    if (userEmailsError) {
        console.log("Error fetching user emails", userEmailsError);
    }

    console.log("Collaborations fetched successfully", collaboraters);
    
    if (error) {
        throw error;
    }

    return collaboraters;
}


//This function removes a collaboration based on user id
// export const removeCollaboration = async (userId) => {}
    