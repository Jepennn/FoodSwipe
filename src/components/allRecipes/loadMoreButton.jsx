import { ArrowDown } from "lucide-react"


export function LoadMoreButton({ fetchNextPage, hasNextPage }) {
    return(
        <button onClick={fetchNextPage} disabled={!hasNextPage} className="flex flex-col items-center gap-2 cursor-pointer my-10">
            Load more
            <ArrowDown className="animate-bounce" />
        </button>
    )
}