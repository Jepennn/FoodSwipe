import { useQuery } from "@tanstack/react-query";
import { getCollaborations } from "../api/collaboration";

export function useGetCollaborations(userID) {

    console.log("User ID: " + userID);

    return useQuery({
        queryKey: ['collaborations'],
        queryFn: () => getCollaborations(userID),
    });
}

