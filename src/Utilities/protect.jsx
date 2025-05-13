import { supabase } from "../supabaseConfig.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Get the current user if logged in
export function Protect({ children }) {

  const navigate = useNavigate();

  //Check if user is logged in otherwise redirect user to login page.
  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase.auth.getSession();
      if (error || data.session == null) {
        navigate("/");
        return null;
      }

      //I wounder if I should set the user in the global state here or not
      // dispatch(setUser(data.session.user));
    }
    checkUser();
  }, [navigate]);

  return (
    <>
      {children}
    </>
  );
}
