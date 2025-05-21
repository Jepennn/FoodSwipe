import { useWebSocket } from "../hooks/useWebSocket";
import { useSelector } from "react-redux";



export function Swipe() {

    const userID = useSelector((state) => state.auth.userId);
    
    // TODO: return functions here that emits event from the socket
    const { sendLikeRecipeEvent } = useWebSocket(userID);
    return (
        <div>
            <h1>Swipe</h1>

        </div>
    );
}