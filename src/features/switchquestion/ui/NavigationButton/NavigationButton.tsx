import ArrowIconsPrev from '@/shared/ui/ArrowIcons/ArrowIconsPrev';
import ArrowIconsNext from '@/shared/ui/ArrowIcons/ArrowIconsNext';
import clsx from 'clsx';
import './nav-buttons.scss';

interface Props {
  direction: 'prev' | 'next';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationButton({setShowButton, setIsHidden, direction, disabled, onClick, children }: Props) {

return (
    <button
    disabled={disabled}
    onClick={() => {
      onClick()
      setIsHidden(false)
      setShowButton(false)
    }}
    className={clsx(
        "nav-button",
        direction === 'prev' && "nav-button__prev",
        direction === 'next' && "nav-button__next"
    )}
    >
        {direction === 'prev' &&  <ArrowIconsPrev width={20} height={20} />}
        {children}
        {direction === 'next' &&  <ArrowIconsNext width={20} height={20} />}
    </button>
  )
}
