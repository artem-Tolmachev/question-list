import Search from '@/features/searchByTitle/ui/Search/Search';
import FiltersSpecializationsList from '../FiltersSpecializationsList/FiltersSpecializationsList';
import FiltersSkillsList from '../FiltersSkillsList/FiltersSkillsList';
import './blockFilters.scss';
import FiltersComplexityList from '../FiltersComplexityList/FiltersComplexityList';
import FiltersRateList from '../FiltersRateList/FiltersRateList';
import FiltersStatus from '../FiltersStatus/FiltersStatus';
import useFilterOptions from '@/shared/hooks/useFilterOptions';
import FiltersSkeletonList from '../FiltersSkeleton/FiltersSkeleton';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';

export default function BlockFilters() {

  const {
    skillsRefetch,
    specRefetch,
    skillsError,
    specError, 
    specializations, 
    isFetching, 
    isLoading, 
    skills: skillsData} = useFilterOptions();

  const {skills, switchSkills } = useFilterQuestions();

  if(isFetching || isLoading) return (
    <div className="filters">
       <FiltersSkeletonList/>
    </div>
 )

  return (
    <div className="filters">

      <Search />

      {specError 
      ? <ErrorMessage error={specError} onRetry={specRefetch}/> 
      : <FiltersSpecializationsList specializations={specializations}/>}

      {skillsError 
      ? <ErrorMessage error={skillsError} onRetry={skillsRefetch}/> 
      : <FiltersSkillsList filterSkills={skills} skillsData={skillsData} switchSkills={switchSkills}/>
      }

      <FiltersComplexityList />
      <FiltersRateList />
      <FiltersStatus />
    </div>
  );
}
