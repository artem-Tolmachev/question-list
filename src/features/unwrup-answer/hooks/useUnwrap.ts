import { useEffect, useRef, useState } from "react";

export default function useUnwrap(longAnswer: string | undefined){
      const refHeightBlock = useRef<HTMLDivElement>(null);
      const [showButton, setShowButton] = useState(false);
      const [isHidden, setIsHidden] = useState(false);
    
      useEffect(() => {
        if (refHeightBlock.current) {
          const height = 800;
          const blockHeight = refHeightBlock.current.getBoundingClientRect().height;
          if(blockHeight > height){
            setShowButton(true);
            setIsHidden(true)
          }
        }
      }, [longAnswer]);

    return {
        refHeightBlock, 
        showButton,
        isHidden,
        setShowButton,
        setIsHidden
    }
}