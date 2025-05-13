import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInviteByEmail } from "@/hooks/useInviteByEmail";
import { useState } from "react";

export function Collaborate() {

  const { mutate, isPending, isError, error } = useInviteByEmail();
  const [email, setEmail] = useState("");


  const handleInvite = () => {

    //Todo: Implement email validation

    console.log(email);
    setEmail("");
    mutate(email);
  }

  return (
    <div>
        <div className="m-20">
            <h1>Invite collaboraters by email</h1>
            <Input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
            <Button onClick={handleInvite}>Invite</Button>
        </div>


        <div className="m-20">
            <h1>Your Collaboraters</h1>
            <p>John Doe</p>
            <p>Jane Doe</p>
        </div>
    </div>
    
  );
}