import type { Skill } from '@/entities/skills';
import Button from '@/shared/ui/Button/Button';
import type { VariantsButton } from '@/shared/ui/Button/types';

interface Props{
  filterSkills?: string[];
  skill: Skill;
  variant: VariantsButton;
  img?: number;
  onClick?: (skill: Skill) => void;
}

export default function SkillsButton({skill, filterSkills, variant, img, onClick}: Props) {
  const isActive = filterSkills?.includes(skill.id.toString());

  return (
    <Button isActive={isActive} variant={variant} onClick={() => onClick?.(skill)}>
      {skill.imageSrc && <img width={img} height={img} src={skill.imageSrc} alt="icon" />}
      {skill.title}
    </Button>
  );
}
