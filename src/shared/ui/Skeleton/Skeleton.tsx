import clsx from 'clsx';
import './skeleton.scss';

interface Props {
    width?: number;
    height?: number;
    radius?: number
}

export default function Skeleton({
    width,
    height,
    radius
}: Props) {

  return (
    <div 
    style={{
        width: width ? `${width}%` : width, 
        height: height ? `${height}px` : height,
        borderRadius: radius ? `${radius}px` : radius
    }}
    className={clsx(
        'skeleton'
        )}>
    </div>
  );
}
