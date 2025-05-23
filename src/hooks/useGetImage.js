import { useQuery } from "@tanstack/react-query";
import { getImage } from "@/api/getImage";


export function useGetImage(image_name) {

    return useQuery({
        queryKey: ["image", image_name],
        queryFn: () => getImage(image_name),
    });
}