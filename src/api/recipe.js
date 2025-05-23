
import { supabase } from "../supabaseConfig.js";

export async function getBulkRecipes(pageParam) {

    const PAGE_SIZE = 9;

    const from = pageParam * PAGE_SIZE; //The page param is the offset for the range we will fetch recieps from
    const to = from + PAGE_SIZE - 1; //The to value is the last index of the range we will fetch recieps from

    const { data, error } = await supabase
    .from('recipe_bank')
    .select()
    .range(from, to);

    console.log("Hello from fetching function");
    
    if(error){
        console.log("Error fetching recipes", error);
        throw error; //Throw error to be handled by the query
    }

    console.log("Recipes fetched successfully", data);
    return data;
}
