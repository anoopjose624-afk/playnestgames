export function GameCardSkeleton() {
  return (
    <div className="pn-card overflow-hidden">
      <div className="aspect-[4/3] pn-skeleton" />
      <div className="space-y-2 p-3">
        <div className="h-4 w-3/4 pn-skeleton" />
        <div className="h-3 w-1/2 pn-skeleton" />
      </div>
    </div>
  );
}

export function GameGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
}
