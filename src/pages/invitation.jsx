import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAcceptInvitation } from "@/hooks/useAcceptInvite";
import { SkeltonInvitation } from "@/components/skelton-components/skeltonInvitation";

export function Invitation() {
    
    const { token } = useParams();

    // TODO: Implement server call and render appropriate component

    const { mutate, isPending, isError } = useAcceptInvitation();


    useEffect(() => {
        mutate(token);
    }, []);

    return (
        <div className=" bg-gray-300 w-full h-screen flex justify-center items-center">
            {isPending ? (
                <SkeltonInvitation />

            ) : isError ? (
                <div>Error in accepting the invitation</div>
            ) : (
            <motion.div
                initial={{ y: "-600px"}}
                animate={{ y: ["-600px", "40px", "-20px", "0px"] }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  times: [0, 0.5, 0.75, 1]
                }}
                className="flex flex-col items-center gap-4 bg-white w-4/5 sm:w-2/5 h-4/5 sm:h-4/5 rounded-2xl shadow-xl"
            >
            <img src="/mail.svg" alt="mail" className="w-6/12 h-6/12 basis-1/2 md:mt-15 md:mb-6 md:w-5/12 md:h-5/12"/>
            <div className="flex flex-col items-center px-4 sm:px-12 basis-1/2">
            <h1 className="mb-2">Invitation accepted</h1>
            <p className="text-center mb-10">The invitation has been accepted, you can now start swiping and find delicious recipes with your friends</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Back to swipe</button>
            </div>
            </motion.div>
            )}
        </div>
    );
} 

    