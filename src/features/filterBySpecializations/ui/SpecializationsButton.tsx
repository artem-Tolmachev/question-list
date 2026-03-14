import type { Specialization } from '@/entities/specializations';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';
import Button from '@/shared/ui/Button/Button';

export default function SpecializationsButton({
  specialization,
}: {
  specialization: Specialization;
}) {
  const {switchSpecialization, specializationid} = useFilterQuestions();
  const isActive = specializationid === specialization.id;
  return (
    <>
      <Button
        variant={'primary'}
        isActive={isActive}
        onClick={() => switchSpecialization(specialization.id)}
      >
        {specialization.title}
      </Button>
    </>
  );
}
