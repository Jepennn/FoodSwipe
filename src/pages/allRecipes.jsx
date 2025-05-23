import { RecipeCard } from "@/components/allRecipes/recipeCard"
import { useGetBulkRecipes } from "@/hooks/useGetBulkRecipes"
import { LoadMoreButton } from "@/components/allRecipes/loadMoreButton"
import { Input } from "@/components/ui/input"

export function AllRecipes() {

    const { data, fetchNextPage, hasNextPage} = useGetBulkRecipes();
    
    return(
        <div className="flex flex-col grow-1 items-center px-10 pt-15">
            <h1 className="text-6xl text-primary font-bold text-start mb-4">
                The Recipe Bank
            </h1>
            <p className="text-center">
                Discover endless culinary inspiration. Save your favorites and build your personal recipe collection.
            </p>
            <div className="flex justify-center w-full">
                <Input 
                    placeholder="Search for specific keywords..." 
                    className="mt-4 mb-14 border-2 w-5/6 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                /> 
            </div>
            <div>
                {data?.pages.map((page, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" key={index}>
                        {page.map((recipe) => (
                            <RecipeCard 
                            title={recipe.title} 
                            ingredients={recipe.ingredients} 
                            instructions={recipe.instructions} 
                            image_name={recipe.image_name} 
                            cleaned_ingredients={recipe.cleaned_ingredients}/>
                        ))}
                    </div>
                ))}
            </div>
            <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
        </div>
    )
}
