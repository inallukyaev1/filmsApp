import './pagination-block.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    updatePrevPageAction,
    resetNextPageAction,
    updateCurrentListFilmsAction,
} from '../redux-reduce/actions';
import { step } from '../elements/elements';
import { NextPage } from '../next-page/next-page';

export function PaginationBlock() {
    const dispatch = useDispatch();

    const currentPage = useSelector(
        (state: { currentPage: number }) => state.currentPage
    );
    const currentListFilm = useSelector(
        (state: { currentListFilm: number[] }) => state.currentListFilm
    );
    const [startSlice, endSlice] = currentListFilm;
    const OtherPage = useSelector(
        (state: { otherPage: number }) => state.otherPage
    );

    useEffect(() => {
        if (currentPage > OtherPage) {
            dispatch(resetNextPageAction(1));
        }
    }, [currentPage, OtherPage]);

    function PrevCurrentPageHandler() {
        if (currentPage > 1) {
            dispatch(updatePrevPageAction(1));
            dispatch(
                updateCurrentListFilmsAction([
                    startSlice - step,
                    endSlice - step,
                ])
            );
        }
    }
    return (
        <div className="nav-btns">
            <button
                onClick={PrevCurrentPageHandler}
                className={
                    currentPage === 1 ? 'prev-btn disabled ' : 'prev-btn'
                }
                disabled={currentPage === 1 ? 'disabled' : null}
            >
                Назад
            </button>
            <NextPage></NextPage>
            <div className="pagination-info">
                <span className="currentPage"> {currentPage}</span> of{' '}
                <span className="OtherPage">{OtherPage}</span>
            </div>
        </div>
    );
}
