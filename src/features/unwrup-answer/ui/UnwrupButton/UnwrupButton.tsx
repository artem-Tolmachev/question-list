import Chevrone from '@/shared/ui/ChevroneIcon/ChevroneIcon';
import { useState } from 'react';
import './unwrupButton.scss';
interface Props{
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function UnwrupButton({setIsHidden}: Props) {
const [isRotate, setIsRotate] = useState(true);

  return (
    <div className='unwrup-button'>
        <button 
        onClick={() => {
            setIsRotate((prev) => !prev)
            setIsHidden((prev) => !prev)
          }  
        }
        className='unwrup-button__btn'
        >
          Развернуть
          <Chevrone isRotate={isRotate}/>
        </button>
    </div>
  )
}
