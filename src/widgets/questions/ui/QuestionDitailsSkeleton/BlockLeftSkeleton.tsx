import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import './detalisSkeleton.scss';

export default function BlockLeftSkeleton() {
  return (
    <div className="block-skeleton block-skeleton__left">
      <Skeleton width={100} height={200} radius={24}/>
      <Skeleton width={100} height={80} radius={24}/>
      <Skeleton width={100} height={230} radius={24}/>
      <Skeleton width={100} height={400} radius={24}/>
    </div>
  );
}
