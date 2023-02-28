import { useDispatch, useSelector } from 'react-redux';
import { updatePrevPageAction } from '../redux-reduce/actions';

export function PrevPage() {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: { currentPage: number }) => state.currentPage
    );

    function PrevCurrentPageHandler() {
        if (currentPage > 1) {
            dispatch(updatePrevPageAction(1));
        }
    }

    return (
        <button
            onClick={PrevCurrentPageHandler}
            className={currentPage === 1 ? 'prev-btn disabled ' : 'prev-btn'}
            disabled={currentPage === 1 ? 'disabled' : null}
        >
            Назад
        </button>
    );
}
