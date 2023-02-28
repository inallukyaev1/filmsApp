import { useSelector, useDispatch } from 'react-redux';
import { popularityFilmsSort } from '../elements/elements';
import { filterFilmsPopularityAction } from '../redux-reduce/actions';
import './film-rate.css';

export function FilmRate() {
    const dispatch = useDispatch();
    function filterForValue(e: React.ChangeEvent<HTMLSelectElement>): void {
        dispatch(filterFilmsPopularityAction(e.target.value));
    }
    return (
        <select name="filter-films" id="" onChange={(e) => filterForValue(e)}>
            {popularityFilmsSort.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}
