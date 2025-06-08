import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosConfig.js";
import { acceptInvitation } from "@/api/invitation.js";

export function useAcceptInvitation() {
    
    return useMutation({
        mutationFn: acceptInvitation,

        //TODD: Invalidate collaboration profile query (Not existing yet)
        onSuccess: () => {

            //TODO: Implement logic in database to connect the users accounts in the database
            console.log("Invitation accepted");
        },
        onError: (error) => {
            console.error("Error accepting invitation:", error);
        },
    });
}
