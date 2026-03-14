import React, { useState, type ReactNode } from 'react';
import './showMore.scss';
import { VISIBELED_ITEMS } from '@/shared/constants/constants';

interface Props<T> {
  renderData: (args: T) => ReactNode;
  items: T[];
}

export default function ShowMore<T extends { id: number}>({ items, renderData }: Props<T>) {
  const [showAllItems, setShowAllItems] = useState(false);
  const visibeledItems = items.slice(0, VISIBELED_ITEMS);
  const data = showAllItems ? visibeledItems : items;

  return (
    <>
      <ul>
        {data.map((item) => (
          <React.Fragment key={item.id}>{renderData(item)}</React.Fragment>
        ))}
      </ul>
      <button onClick={() => setShowAllItems((prev) => !prev)} className="show-more">{showAllItems ? 'Посмотреть все' : 'Скрыть'}</button>
    </>
  );
}

