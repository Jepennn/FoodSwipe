import { useInfiniteQuery } from "@tanstack/react-query";
import { getBulkRecipes } from "@/api/recipe.js";


export function useGetBulkRecipes() {

    return useInfiniteQuery({
        queryKey: ["bulkRecipes"],
        queryFn: ({ pageParam }) => getBulkRecipes(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {

            //If we get less than 9 recipes, we have reached the end of all recipes
            if(lastPage.length < 9){
                return undefined;
            }

            return allPages.length; //Return the number of pages we have fetched
        },
    });
}
    