import { PayloadInterface } from '../elements/elements';

const ADD_FILTER_BY = 'filteredFilms';
const ADD_CURRENT_YEARS = 'addCurrentYear';
const UPDATE_LAST_PAGE = 'updateOtherPage';
const ADD_POPULARITY = 'addPopularity';
const ADD_GENRE = 'addGenre';
const DELETE_GENRE = 'deleteGenre';
const UPDATE_PREV_PAGE = 'prevPage';
const UPDATE_NEXT_PAGE = 'nextPage';
const RESET_CURRENT_PAGE = 'resetCurrentPage';
const UPDATE_CURRENT_SLICE = 'updateCurrentSlice';
const RESET_CURRENT_SLICE = 'resetCurrentSlice';
export function filterFilmsAction(action: PayloadInterface[]) {
    return {
        type: ADD_FILTER_BY,
        payload: action,
    };
}
export function addCurrentYearAction(action: string) {
    return {
        type: ADD_CURRENT_YEARS,
        payload: action,
    };
}

export function updateCurrentListFilmsAction(action: number[]) {
    return {
        type: UPDATE_CURRENT_SLICE,
        payload: action,
    };
}

export function resetCurrentListFilmsAction() {
    return {
        type: RESET_CURRENT_SLICE,
    };
}

export function filterFilmsPopularityAction(action: string) {
    return {
        type: ADD_POPULARITY,
        payload: action,
    };
}
export function addGenreAction(genreId: [], newGenre: string) {
    return {
        type: ADD_GENRE,
        payload: [...genreId, +newGenre],
    };
}

export function deleteGenreAction(genreId: [], newGenre: string) {
    return {
        type: DELETE_GENRE,
        payload: genreId.filter((item) => item !== Number(newGenre)),
    };
}
export function updatePrevPageAction(action: number) {
    return {
        type: UPDATE_PREV_PAGE,
        payload: action,
    };
}

export function updateNextPageAction(action: number) {
    return {
        type: UPDATE_NEXT_PAGE,
        payload: action,
    };
}
export function resetNextPageAction(action: number) {
    return {
        type: RESET_CURRENT_PAGE,
        payload: action,
    };
}
export function updateLastPageAction(action: number) {
    return {
        type: UPDATE_LAST_PAGE,
        payload: action,
    };
}
