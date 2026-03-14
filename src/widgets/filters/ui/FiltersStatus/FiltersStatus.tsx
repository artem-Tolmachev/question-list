import { StatusButton, STATUSES } from "@/features/filterByStatus";
import FiltersList from "../FiltersList/FiltersList";

export default function FiltersStatus() {

  return (
    <div>
      <h4 className="filters-title">Статус</h4>
      <FiltersList
        data={STATUSES}
        renderData={(status) => (
          <li key={status.id}>
            <StatusButton status={status} />
          </li>
        )}
      />
    </div>
  );
}
