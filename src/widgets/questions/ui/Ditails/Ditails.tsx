import type { UserShort } from '@/entities/auth';
import type { ReactNode } from 'react';

interface Props<T> {
  data: T[] | T;
  renderDitails?: (args: T) => ReactNode;
  title: string;
}

export default function Ditails<T extends number | any[] | { id: number } | UserShort>({
  data,
  title,
  renderDitails,
}: Props<T>) {
  function isArray<T>(value: T | any[]): value is any[] {
    return Array.isArray(value);
  }

  return (
    <>
    <span>{title}</span>
      {isArray(data) ? <div>{data.length}</div> : <div>{String(data)}</div>}
      <div>
        {renderDitails &&
          isArray(data) &&
          data?.map((item, i) => <div key={i}>{renderDitails(item)}</div>)}
      </div>
    </>
  );
}
