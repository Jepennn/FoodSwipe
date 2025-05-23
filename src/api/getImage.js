import { supabase } from "../supabaseConfig";

export async function getImage(image_name) {
    try {
        const {data: image, error: imageError} = supabase.storage.from('food-image').getPublicUrl(image_name);
        console.log(image);
        return image.publicUrl + ".jpg";
    } catch (error) {
        console.log("Error fetching image", error);
        throw error;
    }
}

// https://rrurrkyicmqrisppzodz.supabase.co/storage/v1/object/public/food-image//miso-butter-roast-chicken-acorn-squash-panzanella.jpg