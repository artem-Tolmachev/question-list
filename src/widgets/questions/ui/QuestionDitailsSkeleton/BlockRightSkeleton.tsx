import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import React from 'react';

function BlockRightSkeleton() {
  const count = 2;
  return (
    <div className="block-skeleton-right__item">
      {Array.from({ length: count }).map((_, i) => (
        <React.Fragment key={i}>
          <Skeleton width={20} height={10} />
          <div className="block-skeleton-right__inner">
            <Skeleton width={20} height={42} radius={8}/>
            <Skeleton width={70} height={42} radius={8} />
            <Skeleton width={30} height={42} radius={8} />
            <Skeleton width={40} height={42} radius={8} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function BlockRightSkeletonList() {
  const count = 2;

  return (
    <div className="block-skeleton-right">
      {Array.from({ length: count }).map((_, i) => (
        <BlockRightSkeleton key={i} />
      ))}
    </div>
  );
}
