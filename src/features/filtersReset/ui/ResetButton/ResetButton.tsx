import Button from '@/shared/ui/Button/Button';
import { useSearchParams } from 'react-router-dom';

export default function ResetButton() {
  const [_, setSearchParams] = useSearchParams();

  const handelReset = () => {
    setSearchParams({});
  };
  return (
    <Button variant="reset" onClick={() => handelReset()}>
      {'Сбросить филтр'}
    </Button>
  );
}
