// import { useSelector, useDispatch } from "react-redux";

//This function will be used in our thunk fetch the data from our supabase backend
export async function VeganApiRecipes() {
  const API_KEY = import.meta.env.VITE_EDGE_FUNCTION_KEY;
  const API_TASTY_URL = import.meta.env.VITE_EDGE_FUNCTION_TASTY_ENDPOINT;

  console.log(API_KEY);
  console.log(API_TASTY_URL);

  try {
    const response = await fetch(API_TASTY_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    //Prase the response to JavaScript Object
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("There was an error fetching the data");
    console.error(error);
  }
}
