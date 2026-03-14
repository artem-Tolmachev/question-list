import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import './filtersSkeleton.scss';

function FiltersSkeleton() {
  return (
    <div className="filters-skeleton__block">
      <Skeleton width={30} height={20} radius={4}/>
      <div className="filters-skeleton__inner">
        <Skeleton width={20} height={42} />
        <Skeleton width={50} height={42} />
        <Skeleton width={30} height={42} />
        <Skeleton width={40} height={42} />
        <Skeleton width={60} height={42} />
      </div>
    </div>
  );
}

export default function FiltersSkeletonList() {
  const count = 3;

  return (
    <div className="filters-skeleton">
      <Skeleton width={100} height={48} radius={4}/>
      {Array.from({ length: count }).map((_, i) => (
        <FiltersSkeleton key={i}/>
      ))}
    </div>
  );
}
