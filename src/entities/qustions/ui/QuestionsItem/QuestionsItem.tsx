import Chevrone from '@/shared/ui/ChevroneIcon/ChevroneIcon';
import './questionsItem.scss';
import { useState } from 'react';
import AnswerBlock from '../AnswerBlock/AnswerBlock';
import type { QuestionItemProps } from '../../model/types';
import clsx from 'clsx';

export default function QuestionsItem({
  imageSrc,
  title,
  rate,
  complexity,
  shortAnswer,
  id
}: QuestionItemProps) {
  const [isRotate, setIsRotate] = useState(true);

  return (
    <div className="question">
      <button onClick={() => setIsRotate((prev) => !prev)} className={clsx("question__btn",
        !isRotate && 'question__btn--mrg'
      )}>
        <p className="question__text">{title}</p>
        <Chevrone isRotate={isRotate} />
      </button>
      <AnswerBlock
        imageSrc={imageSrc}
        title={title}
        rate={rate}
        complexity={complexity}
        shortAnswer={shortAnswer}
        isRotate={isRotate}
        id={id}
      />
    </div>
  );
}
