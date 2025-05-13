import { useMutation } from "@tanstack/react-query";
import { inviteByEmail } from "@/api/invitation";

export function useInviteByEmail() {
  return useMutation({
    mutationFn: inviteByEmail,

    //Todo: Invalidate collaboration profile query (Not existing yet) and also add in toast notifications
    onSuccess: () => {
      console.log("Invitation sent successfully");
    },
    onError: (error) => {
      console.error("Error sending invitation:", error);
    },
  });
}