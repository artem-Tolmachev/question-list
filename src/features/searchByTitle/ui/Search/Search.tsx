import './search.scss';
import SearchIcon from '@/shared/ui/SearchIcon/SearchIcon';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';

export default function Search() {
  const {setTitle, title} = useFilterQuestions();
  
  return (
    <div className="searcher">
      <SearchIcon color={'var(--color-text-gray)'} />
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Введите запрос…"
      />
    </div>
  );
}
