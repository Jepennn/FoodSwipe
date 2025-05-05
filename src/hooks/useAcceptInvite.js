import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosConfig.js";
import { acceptInvitation } from "@/api/invitation.js";

export function useAcceptInvitation() {
    
    return useMutation({
        mutationFn: acceptInvitation,

        //TODD: Invalidate collaboration profile query (Not existing yet)
        onSuccess: () => {
            console.log("Invitation accepted");
        },
        onError: (error) => {
            console.error("Error accepting invitation:", error);
        },
    });
}
