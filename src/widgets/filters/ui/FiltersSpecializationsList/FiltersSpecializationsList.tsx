import FiltersList from '../FiltersList/FiltersList';
import { SpecializationsButton } from '@/features/filterBySpecializations';
import '../BlockFilters/blockFilters.scss';
import type { Specialization } from '@/entities/specializations';

export default function FiltersSpecializationsList({specializations}: {specializations: Specialization[]}) {

  return (
    <div>
      <h4 className='filters-title'>Специализация</h4>
      <FiltersList
        isShowMore={true}
        data={specializations}
        renderData={(specialization) => (
          <li key={specialization.id}>
            <SpecializationsButton specialization={specialization} />
          </li>
        )}
      />
    </div>
  );
}
