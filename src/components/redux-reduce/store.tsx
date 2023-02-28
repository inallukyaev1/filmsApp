import { defaultState } from '../elements/elements';
import { createStore } from 'redux';

export const reducer = (
    state = defaultState,
    action: { type: string; payload: []; calculatedNumber: number }
) => {
    switch (action.type) {
        case 'filteredFilms':
            return {
                ...state,
                filteredFilms: action.payload,
                otherPage: Math.ceil(action.payload.length / 10),
            };

        case 'filmDescription':
            return {
                ...state,
                filmDescription: action.payload,
            };
        case 'addFavoriteFilms':
            return {
                ...state,
                favoriteFilms: action.payload,
            };

        case 'addWatchLater':
            return {
                ...state,
                watchLater: action.payload,
            };
        case 'resetFilters': {
            return {
                ...state,
                filteredFilms: defaultState.filteredFilms,
                genreId: defaultState.genreId,
                currentPage: defaultState.currentPage,
                otherPage: defaultState.otherPage,
                valuePopularity: defaultState.valuePopularity,
                currentYear: defaultState.currentYear,
            };
        }
        case 'updateOtherPage':
            return {
                ...state,
                otherPage: Math.ceil(action.payload / 10),
            };

        case 'nextPage':
            return {
                ...state,
                currentPage: state.currentPage + action.payload,
            };
        case 'resetCurrentPage':
            return {
                ...state,
                currentPage: action.payload,
            };
        case 'prevPage':
            console.log(action.payload);
            return {
                ...state,
                currentPage: state.currentPage - action.payload,
            };
        case 'addPopularity':
            return {
                ...state,
                valuePopularity: action.payload,
            };
        case 'addGenre':
            return {
                ...state,
                genreId: action.payload,
            };
        case 'deleteGenre':
            return {
                ...state,
                genreId: action.payload,
            };
        case 'addCurrentYear':
            return {
                ...state,
                currentYear: action.payload,
            };
        case 'exampleAuthorization':
            return {
                ...state,
                isAuthorization: action.payload,
            };

        default:
            return state;
    }
};

export const store = createStore(reducer);
