import FiltersList from '../FiltersList/FiltersList';
import { SkillsButton } from '@/features/filterBySkills';
import type { Skill } from '@/entities/skills';

interface Props{
  switchSkills: (args: number) => void;
  filterSkills: string[];
  skillsData: Skill[];
}

export default function FiltersSkillsList({skillsData, switchSkills, filterSkills}: Props) {

  return (
    <div>
      <h4 className="filters-title">Навыки</h4>
      <FiltersList
        data={skillsData}
        isShowMore={true}
        renderData={(skill) => (
          <li key={skill.id}>
            <SkillsButton
            onClick={(skill) => switchSkills(skill.id)} 
            variant='primary' 
            filterSkills={filterSkills}
            skill={skill} 
            img={30} />
          </li>
        )}
      />
    </div>
  );
}
