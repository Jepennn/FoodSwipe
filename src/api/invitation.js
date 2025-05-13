import axiosInstance from "@/lib/axiosConfig.js";

// Accept invitation function used in useAcceptInvitation hook
export const acceptInvitation = async (inviteToken) => {

    const tokenString = localStorage.getItem("foodswipe-auth-token");
    const tokenObject = JSON.parse(tokenString);
    const accessToken = tokenObject.access_token;

    const response = await axiosInstance.post("/AcceptInvitation", 
      {token: inviteToken},
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
    });

  return response.data;
}

// New function to invite by email
export const inviteByEmail = async (email) => {

    const tokenString = localStorage.getItem("foodswipe-auth-token");
    const tokenObject = JSON.parse(tokenString);
    const accessToken = tokenObject.access_token;

    const response = await axiosInstance.post("/Collaborate", { toEmail: email },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      );

  return response.data;
}
