import { useGetCollaborations } from "@/hooks/useGetCollabortions"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInviteByEmail } from "@/hooks/useInviteByEmail";
import { useState } from "react";
import { Users, UserPlus, UserX } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSelector } from "react-redux";


export function Collaborate() {

  //Used to invite a collaborator by email
  const { mutate, isPending, isError, error } = useInviteByEmail();
  const [email, setEmail] = useState("");

  //Used to get users collaboraters from database
  const userID = useSelector((state) => state.auth.userId);
  const { data } = useGetCollaborations(userID);

  console.log("Data: ", data);

  const [collaborations, setCollaborations] = useState([]);

  const handleInvite = (e) => {
    e.preventDefault();

    if (!email) return;
    

    mutate(email);
    
    // For demo purposes, add a new active collaboration
    const newCollaboration = {
      id: Date.now(),
      collaboratorEmail: email,
      created: 'Just now',
      status: 'active'
    };
    
    setCollaborations([newCollaboration, ...collaborations]);
    setEmail("");
  }

  const removeCollaboration = (id) => {
    setCollaborations(collaborations.filter(collab => collab.id !== id));
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Your Collaborations</h1>
        <p className="text-lg text-muted-foreground">
          Create and manage your recipe collaborations
        </p>
        <div className="mt-6 border-b border-border" />
      </div>

      <div className="flex flex-col gap-8">
        {/* Invite New Collaborator */}
        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <UserPlus className="w-6 h-6 text-primary" />
              <CardTitle>Add Collaborator</CardTitle>
            </div>
            <CardDescription>
              Invite someone to collaborate with you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleInvite}>
              <div className="flex gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="friend@example.com"
                  className="h-11 flex-1"
                  required
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Sending...' : 'Invite'}
                </Button>
              </div>
              {isError && (
                <p className="text-sm text-destructive mt-2">
                  {error?.message || 'Failed to send invitation. Please try again.'}
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Active Collaborations */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Active Collaborations</h2>
            <span className="text-sm text-muted-foreground">
              {collaborations.length} {collaborations.length === 1 ? 'collaboration' : 'collaborations'}
            </span>
          </div>
          
          <div className="space-y-3">
            {collaborations.length > 0 ? (
              <div className="border rounded-lg divide-y">
                {collaborations.map((collaboration) => (
                  <div key={collaboration.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        <Avatar className="h-10 w-10 border-2 border-background">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            You
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-background">
                          <AvatarFallback className="bg-muted">
                            {collaboration.collaboratorEmail.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="font-medium">Collaborating with</p>
                        <p className="text-sm text-muted-foreground">{collaboration.collaboratorEmail}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Connected {collaboration.created}
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => removeCollaboration(collaboration.id)}
                    >
                      <UserX className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed rounded-lg">
                <Users className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-50" />
                <h3 className="text-lg font-medium">No active collaborations</h3>
                <p className="text-muted-foreground mt-1">
                  Add a collaborator to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
}