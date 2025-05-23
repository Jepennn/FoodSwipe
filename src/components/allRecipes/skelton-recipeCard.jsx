import { Skeleton } from "@/components/ui/skeleton"

export function RecipeCardSkeleton() {
  return (
    <div className="flex flex-col items-center rounded-2xl overflow-hidden w-[279px] h-[300px] bg-white shadow-sm">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-[167px] rounded-t-2xl" />
      
      {/* Content Area */}
      <div className="w-full p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        
        {/* Ingredients Preview Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        
        {/* Action Buttons Skeleton */}
        <div className="flex justify-between pt-2">
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function RecipeCardsSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {Array.from({ length: count }).map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  )
}