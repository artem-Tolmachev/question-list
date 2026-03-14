import './questionDitailsLeft.scss';
import SkillsImage from '@/shared/assets/image_101.png';
import type { QuestionDitailsProps } from '@/entities/qustions';
import { UnwrupButton, useUnwrap } from '@/features/unwrup-answer';
import clsx from 'clsx';
import { SwitchQuestionPage } from '@/features/switchquestion';

export default function QuestionDitailsLeft({
  description,
  title,
  shortAnswer,
  longAnswer,
}: QuestionDitailsProps) {

  const {
    isHidden, 
    refHeightBlock, 
    setIsHidden, 
    showButton,
    setShowButton
  } = useUnwrap(longAnswer)

  return (
    <div className="question-left">
      <div className="question-left__item">
        <div className="question-left__head">
          <img className="question-left__image" src={SkillsImage} alt="skills-image" />
          <div className="question-left__inf">
            <h1 className="question-left__title">{title}</h1>
            <p className="question-left__description">{description}</p>
          </div>
        </div>
      </div>
      <div className="question-left__item question-left__item--centred">
        <SwitchQuestionPage
         setIsHidden={setIsHidden}
        setShowButton={setShowButton}
         />
      </div>
      <div className="question-left__item">
        {shortAnswer && <>
          <p className='question-left__subheading'>Краткий ответ</p>
          <div dangerouslySetInnerHTML={{ __html: shortAnswer }} />
        </>}
      </div>
      {longAnswer && (
        <div 
        className={clsx('question-left__item', 
        isHidden && 'question-left__item--over')}>
          <p className='question-left__subheading'>Развёрнутый ответ</p>
          <div 
          ref={refHeightBlock}
          className='question-left__item--long-answer'
           dangerouslySetInnerHTML={{ __html: longAnswer }} />
          {showButton && <UnwrupButton  setIsHidden={setIsHidden}/>}
        </div>
      )}
    </div>
  );
}
