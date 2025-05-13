import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "@/api/logout";
import { useDispatch } from "react-redux";
import { resetUser } from "@/Redux/Auth/authSlice";
import { useNavigate } from "react-router-dom";


export function useLogoutUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: () => logoutUser(),
        onSuccess: () => {
            console.log("Logged out successfully"); 
            dispatch(resetUser());
            navigate("/");
        },
    })  
}