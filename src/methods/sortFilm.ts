import { PayloadInterface } from '../components/elements/elements';
import { useSelector } from 'react-redux';
export function sortFilmsByGenre(
    unsortedFilm: PayloadInterface[],
    ids: []
): PayloadInterface[] {
    if (ids.length === 0) {
        return unsortedFilm;
    }

    const sortedFilms: PayloadInterface[] = [];
    unsortedFilm.forEach((item) => {
        let is_same = item.genre_ids.some(function (element: number): boolean {
            return ids.includes(element);
        });

        if (is_same) {
            sortedFilms.push(item);
        }
    });

    return sortedFilms;
}
function getInteger(a: number) {
    let z = Math.round(a) - a;
    return a;
}
export function sortFilmsByValue(
    target: string,
    unsortedFilms: PayloadInterface[]
) {
    const unsortedFilm = [...unsortedFilms];
    switch (target) {
        case 'Популярные по убыванию':
            return unsortedFilm.sort(
                (a: { popularity: number }, b: { popularity: number }) => {
                    if (Math.round(b.popularity) === Math.round(a.popularity)) {
                        return (
                            getInteger(b.popularity) - getInteger(a.popularity)
                        );
                    } else {
                        return (
                            Math.round(b.popularity) - Math.round(a.popularity)
                        );
                    }
                }
            );
        case 'Популярные по возрастанию':
            return unsortedFilm.sort(
                (a: { popularity: number }, b: { popularity: number }) => {
                    if (Math.round(a.popularity) === Math.round(b.popularity)) {
                        return (
                            getInteger(a.popularity) - getInteger(b.popularity)
                        );
                    } else {
                        return (
                            Math.round(a.popularity) - Math.round(b.popularity)
                        );
                    }
                }
            );

        case 'Смотреть позже ':
            return unsortedFilm;

        case 'Рейтинг по убыванию':
            return unsortedFilm.sort(
                (a: { vote_average: number }, b: { vote_average: number }) => {
                    if (
                        Math.round(b.vote_average) ===
                        Math.round(a.vote_average)
                    ) {
                        return (
                            getInteger(b.vote_average) -
                            getInteger(a.vote_average)
                        );
                    } else {
                        return (
                            getInteger(b.vote_average) -
                            getInteger(a.vote_average)
                        );
                    }
                }
            );
        case 'Рейтинг по возрастанию':
            return unsortedFilm.sort(
                (a: { vote_average: number }, b: { vote_average: number }) => {
                    if (
                        Math.round(a.vote_average) ===
                        Math.round(b.vote_average)
                    ) {
                        return (
                            getInteger(a.vote_average) -
                            getInteger(b.vote_average)
                        );
                    } else {
                        return (
                            getInteger(a.vote_average) -
                            getInteger(b.vote_average)
                        );
                    }
                }
            );
        default:
            return unsortedFilms;
    }
}

export function exampleWatchLater(item, watchLater) {
    const gg = [...watchLater];
    if (gg.length === 0) {
        gg.push(item);
        return gg;
    }

    watchLater.forEach((title) => {
        if (title === item.title) {
            return gg;
        } else {
            gg.push(item);
        }
    });
    return gg;
}

export function sortFilmsByYears(
    allFilms: PayloadInterface[],
    year: number | string
) {
    let FilmsYear = [...allFilms];
    if (year !== 'Показать все') {
        FilmsYear = FilmsYear.filter(
            (item) =>
                Number(new Date(item.release_date).getFullYear()) ===
                Number(year)
        );
    }
    return FilmsYear;
}

export function applyFilters(
    unsortedFilm: PayloadInterface[],
    valuePopularity: string,
    genreIds: [],
    year: number | string
) {
    let newArray: PayloadInterface[] = [...unsortedFilm];
    if (year) {
        newArray = sortFilmsByYears(newArray, year);
    }
    if (valuePopularity) {
        newArray = sortFilmsByValue(valuePopularity, newArray);
    }
    if (genreIds.length !== 0) {
        newArray = sortFilmsByGenre(newArray, genreIds);
    }
    return newArray;
}
