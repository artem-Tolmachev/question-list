import './chevrone.scss';
import clsx from 'clsx';

interface Props{
  isRotate: boolean;
}

export default function ChevroneIcon({isRotate}: Props) {

  return (
    <span
      className={clsx(
        'chevrone',
        isRotate && 'chevrone__rotate'
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 15L12 9L18 15"
          stroke="#6A0BFF"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
