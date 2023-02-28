import './ListFilms.css';
import { FilmCard } from '../film-card/FilmCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { applyFilters } from '../../methods/sortFilm.js';
import {
    getFromLocalStorage,
    addToLocalStorage,
} from '../../methods/localStorageAction';
import {
    updateLastPageAction,
    resetNextPageAction,
} from '../redux-reduce/actions';
import { PayloadInterface } from '../elements/elements';

export function ListFilms() {
    const dispatch = useDispatch();
    const [startSlice] = useSelector(
        (state: { currentListFilm: number[] }) => state.currentListFilm
    );
    const [listFilmsLater, setListFilmsLater] = useState(
        getFromLocalStorage('listFilmsLater') || []
    );

    const genreIds = useSelector((state: { genreId: [] }) => state.genreId);
    const valuePopularity = useSelector(
        (state: { valuePopularity: string }) => state.valuePopularity
    );
    const allFilms = useSelector((state: { filteredFilms: [] }) => {
        return state.filteredFilms;
    });
    const currentYear = useSelector(
        (state: { currentYear: number }) => state.currentYear
    );
    const [favoriteFilms, setfavoriteFilms] = useState(
        getFromLocalStorage('listFilmFavorite') || []
    );

    const [catalogFilms, setCatalogFilms] = useState<PayloadInterface[]>([]);
    const currentPages = useSelector(
        (state: { currentPage: number }) => state.currentPage
    );
    function addToWatchLater(item_films: PayloadInterface[], title: string) {
        if (listFilmsLater.length === 0) {
            setListFilmsLater((el: PayloadInterface[]) => [...el, item_films]);
            addToLocalStorage('listFilmsLater', [item_films]);
            return;
        }

        const filteredFilmLater = listFilmsLater.filter(
            (item: PayloadInterface) => item.title === title
        );
        if (filteredFilmLater.length === 0) {
            setListFilmsLater((el: PayloadInterface[]) => [...el, item_films]);
            addToLocalStorage('listFilmsLater', [
                ...listFilmsLater,
                item_films,
            ]);
            return;
        } else {
            const filteredFilmLater = listFilmsLater.filter(
                (item: PayloadInterface) => item.title !== title
            );
            setListFilmsLater(() => filteredFilmLater);

            addToLocalStorage('listFilmsLater', filteredFilmLater);
        }
    }

    function addFavoriteFilms(item_films: PayloadInterface, title: string) {
        if (favoriteFilms.length === 0) {
            setfavoriteFilms((el: []) => [...el, item_films]);
            addToLocalStorage('listFilmFavorite', [item_films]);
            return;
        }
        const filteredFilmLater = favoriteFilms.filter(
            (item: PayloadInterface) => item.title === title
        );
        if (filteredFilmLater.length === 0) {
            setfavoriteFilms((el: PayloadInterface[]) => {
                return [...el, item_films];
            });
            addToLocalStorage('listFilmFavorite', [
                ...favoriteFilms,
                item_films,
            ]);
            return;
        } else {
            const filteredFilmLater = favoriteFilms.filter(
                (item: PayloadInterface) => item.title !== title
            );

            setfavoriteFilms(() => filteredFilmLater);
            addToLocalStorage('listFilmFavorite', filteredFilmLater);
        }
    }

    useEffect(() => {
        const lastIndex = currentPages * 10;
        const firstIndex = lastIndex - 10;
        dispatch({
            type: 'addWatchLater',
            payload: listFilmsLater,
        });
        dispatch({ type: 'addFavoriteFilms', payload: favoriteFilms });
        let sortedFilms = applyFilters(
            [...allFilms],
            valuePopularity,
            genreIds,
            currentYear
        );
        if (!sortedFilms.length) {
            dispatch(resetNextPageAction(1));
        }
        dispatch(
            updateLastPageAction(sortedFilms.length ? sortedFilms.length : 1)
        );
        const sliceFilms = sortedFilms.slice(firstIndex, lastIndex);
        setCatalogFilms(sliceFilms);
    }, [
        genreIds,
        startSlice,
        valuePopularity,
        currentYear,
        allFilms,
        listFilmsLater,
        favoriteFilms,
        currentPages,
    ]);
    return (
        <ul className="listFilms-wrapper">
            {catalogFilms.length === 0
                ? 'Фильмов нет'
                : catalogFilms.map((item: PayloadInterface) => (
                      <li key={item.id}>
                          <FilmCard
                              listFilmsLater={listFilmsLater}
                              favoriteFilms={favoriteFilms}
                              addToWatchLater={addToWatchLater}
                              addFavoriteFilms={addFavoriteFilms}
                              item={item}
                              poster_path={
                                  item.poster_path || item.backdrop_path
                              }
                              title={item.title}
                              voteAverage={item.vote_average}
                          ></FilmCard>
                      </li>
                  ))}
        </ul>
    );
}
