import { RateButton, RATINGS_QUESTIONS } from "@/features/filterByRate";
import FiltersList from "../FiltersList/FiltersList";

export default function FiltersRateList() {

   return (
     <div>
       <h4 className="filters-title">Рейтинг</h4>
       <FiltersList
         data={RATINGS_QUESTIONS}
         renderData={(rating) => (
           <li key={rating.id}>
             <RateButton rating={rating} />
           </li>
         )}
       />
     </div>
   );
}
