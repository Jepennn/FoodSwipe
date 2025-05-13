import { Skeleton } from "@/components/ui/skeleton";

export function SkeltonInvitation() {
    return (
        <div className=" flex flex-col items-center justify-start gap-4 bg-white w-4/5 h-3/5 w sm:w-2/5 h sm:h-4/5 rounded-2xl shadow-xl">
            <Skeleton className="w-[220px] h-[220px] rounded-full md:mt-20 mt-10"/>
            <Skeleton className="w-2/3 md:w-3/6 h-[30px] mt-5"/>
            <Skeleton className="w-2/3 md:w-3/6 h-[10px] mt-1"/>
            <Skeleton className="w-2/3 md:w-3/6 h-[10px] mt-1"/>
            <Skeleton className="w-2/3 md:w-3/6 h-[10px] mt-1"/>
            <Skeleton className="w-1/4 md:w-1/6 h-[25px] mt-4"/>
        </div>
        );
}