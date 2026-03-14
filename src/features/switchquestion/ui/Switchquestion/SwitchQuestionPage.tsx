import { useEffect } from 'react';
import usePrefetchPages from '../../hooks/usePrefetchPages';
import useQuestionNavigatio from '../../hooks/useQuestionNavigatio';
import NavigationButton from '../NavigationButton/NavigationButton';
import './switchquestion.scss';

interface Props {
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SwitchQuestionPage({setIsHidden, setShowButton}: Props) {
  const {
    questions,
    questionId,
    navigate,
    currentPage,
    currentIndex,
    questionIndex,
    setQuestionIndex,
    nextPage,
    prevPage,
    nextPageData,
    prevPageData,
    canGoNext,
    canGoPrev
  } = useQuestionNavigatio();

  usePrefetchPages(prevPage, nextPage);

  useEffect(() => {
    if (currentIndex !== -1) {
      setQuestionIndex(currentIndex);
    }
  }, [questionId, currentIndex]);

  const handleNext = () => {
    const nextQuestionIndex = questionIndex + 1;
    setQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex > questions.length - 1) {
      if (nextPageData.length > 0) {
        navigate(`/question/${nextPageData[0].id}?page=${nextPage}`);
      }
      setQuestionIndex(0);
    } else {
      navigate(`/question/${questions[nextQuestionIndex].id}?page=${currentPage}`);
    }
  };

  const handlePrev = () => {
    const prevQuestionIndex = questionIndex - 1;

    if (prevQuestionIndex >= 0) {
      const prevQuestionId = questions[prevQuestionIndex].id;
      setQuestionIndex(prevQuestionIndex);
      navigate(`/question/${prevQuestionId}?page=${currentPage}`);
    } else {
      if (currentPage > 1) {
        const lastQuestionId = prevPageData.slice(-1)[0]?.id;
        if (lastQuestionId) {
          setQuestionIndex(prevPageData.length - 1);
          navigate(`/question/${lastQuestionId}?page=${prevPage}`);
        }
      }
    }
  };

  return (
    <div className="group-buttons">
      <NavigationButton
        setIsHidden={setIsHidden}
        setShowButton={setShowButton}
        disabled={canGoPrev}
        onClick={handlePrev}
        direction={'prev'} 
      >
        Предыдущий
      </NavigationButton>
      <NavigationButton
      setShowButton={setShowButton}
      setIsHidden={setIsHidden}
      direction={'next'} 
      onClick={handleNext}
      disabled={canGoNext} 
      >
          Следующий
      </NavigationButton>
    </div>
  );
}
