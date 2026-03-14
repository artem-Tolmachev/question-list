import Button from '@/shared/ui/Button/Button';
import type { ComplexityRange } from '../model/type';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';

interface Props {
  complexityInf: ComplexityRange; 
}

export default function ComplexityButton({ complexityInf }: Props) {
  const  {switchComplexity, complexity} = useFilterQuestions();
  const isActive = complexityInf.range.every((item) => complexity.includes(item));

  return (
    <>
      <Button
        variant={'primary'}
        isActive={isActive}
        onClick={() => switchComplexity(complexityInf.range)}
      >
        {complexityInf.label}
      </Button>
    </>
  );
}
