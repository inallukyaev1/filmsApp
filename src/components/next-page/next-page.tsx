import { useDispatch, useSelector } from 'react-redux';
import { updateNextPageAction } from '../redux-reduce/actions';

export function NextPage() {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: { currentPage: number }) => state.currentPage
    );

    const OtherPage = useSelector(
        (state: { otherPage: number }) => state.otherPage
    );
    function NextCurrentPageHandler() {
        dispatch(updateNextPageAction(1));
    }
    return (
        <button
            onClick={NextCurrentPageHandler}
            className={
                currentPage === OtherPage ? 'next-btn disabled ' : 'next-btn'
            }
            disabled={currentPage === OtherPage ? 'disabled' : null}
        >
            Вперед
        </button>
    );
}
