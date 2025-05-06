import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function UserAvatar() {
    return (
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm ">Jeppe Hesselgren</p>
        </div>
    )
}
