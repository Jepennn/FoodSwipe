import { supabase } from "../supabaseConfig.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Protect({ children }) {
  //Get the current user if logged in
  const navigate = useNavigate();

  //Check if user is logged in otherwise redirect user to login page.
  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase.auth.getSession();
      if (error || data.session == null) {
        navigate("/");
        return null;
      }
    }
    checkUser();
  }),
    [navigate];

  return children;
}
