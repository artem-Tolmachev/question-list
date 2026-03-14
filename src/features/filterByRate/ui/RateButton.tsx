import Button from '@/shared/ui/Button/Button';
import type { RatingsItems } from '../model/types';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';

interface Props {
  rating: RatingsItems;
}

export default function RateButton({ rating }: Props) {
    const {switchRating, rate} = useFilterQuestions();
    const isActive = rate.includes(rating.rating);

    return (
        <Button
        variant={'primary'}
        isActive={isActive}
        onClick={() => switchRating(rating.rating)}
        >
        {rating.rating}
        </Button>
    );
}
