import FiltersList from '../FiltersList/FiltersList';
import { COMPLEXITY_LEVELS, ComplexityButton } from '@/features/filterByComplexity';

export default function FiltersComplexityList() {
  
  return (
    <div>
      <h4 className="filters-title">Уровень сложности</h4>
      <FiltersList
        data={COMPLEXITY_LEVELS}
        renderData={(complexity) => (
          <li key={complexity.id}>
            <ComplexityButton complexityInf={complexity} />
          </li>
        )}
      />
    </div>
  );
}
