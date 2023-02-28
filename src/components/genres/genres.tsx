import { useSelector, useDispatch } from 'react-redux';
import './checkboxGenres.css';
import { addGenreAction, deleteGenreAction } from '../redux-reduce/actions';
import { allGenre } from '../elements/elements';

export function Genres() {
    const dispatch = useDispatch();
    const genreId = useSelector((state: { genreId: [] }) => state.genreId);

    function filterforGenre(
        e: React.ChangeEvent<HTMLInputElement>
    ): void | undefined {
        const currentId: string = e.target.id;
        console.log(currentId);
        if (e.target.checked) {
            dispatch(addGenreAction(genreId, currentId));
            return;
        }
        const sortByGenre: [] = [...genreId];
        dispatch(deleteGenreAction(sortByGenre, currentId));
    }
    return (
        <fieldset>
            <legend>Выберите жанр</legend>
            {allGenre.map((item) => (
                <div key={item.id} className="checkbox-block">
                    <input
                        type="checkbox"
                        id={item.id}
                        name={item.name}
                        onChange={(e) => filterforGenre(e)}
                    />
                    <label htmlFor={item.id}>{item.name}</label>
                </div>
            ))}
        </fieldset>
    );
}
