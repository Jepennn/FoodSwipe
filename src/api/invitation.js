import axiosInstance from "@/lib/axiosConfig.js";


//Accept invitation function used in useAcceptInvitation hook
export const acceptInvitation = async (inviteToken) => {

    const response = await axiosInstance.post("/acceptInvitation", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("foodswipe-auth-token")}`,
        },
        body: JSON.stringify({
            token: inviteToken,
        }),
    });

    return response.data;
}