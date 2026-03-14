import { ShowMore } from '@/features/switchShowMore';
import { type ReactNode } from 'react';
import './filterList.scss';

interface Props<T> {
  renderData: (args: T) => ReactNode;
  renderAmpty?: ReactNode;
  data: T[];
  isShowMore?: boolean;
}

export default function FiltersList<T extends {id: number}>({
  renderData,
  data,
  isShowMore
}: Props<T>) {
  return (
    <div className="filter-block">
      {isShowMore ? (
        <ShowMore
          items={data}
          renderData={renderData}
        />
      ) : (
        <ul>{data.map((item) => renderData(item))}</ul>
      )}
    </div>
  );
}
