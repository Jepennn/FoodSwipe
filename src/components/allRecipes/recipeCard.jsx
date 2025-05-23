import { Card } from "@/components/ui/card"
import { supabase } from "@/supabaseConfig"
import { useGetImage } from "@/hooks/useGetImage"

export function RecipeCard({title, ingredients, instructions, image_name, cleaned_ingredients}) {

    const {data, error, isLoading} = useGetImage(image_name);

    console.log(data)

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

    return(
        <div className="flex flex-col items-center rounded-2xl overflow-hidden">
            <img src={data} alt="" className="w-[279px] h-[167px] object-cover" />
        </div>
    )
}

