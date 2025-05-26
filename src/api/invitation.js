import axiosInstance from "@/lib/axiosConfig.js";

// Accept invitation function used in useAcceptInvitation hook
export const acceptInvitation = async ({token, id}) => {

    const tokenString = localStorage.getItem("foodswipe-auth-token");
    const tokenObject = JSON.parse(tokenString);
    const accessToken = tokenObject.access_token;

    console.log("Token: " + token);
    console.log("Inviter user id: " + id);

    //?? Will this work if the user is not logged in and want to accept an invitation? Probably not??
    const response = await axiosInstance.post("/AcceptInvitation", 
      {token: token,
        inviter_user_id: id
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
    });

  return response.data;
}

// Function to invite a collaborater by email
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
