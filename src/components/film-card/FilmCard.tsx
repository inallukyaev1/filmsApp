import './FilmCard.css';
import star from '../../assets/star.svg';
import bookmark from '../../assets/bookmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getFromLocalStorage } from '../../methods/localStorageAction';

export function FilmCard({
    favoriteFilms,
    listFilmsLater,
    title,
    voteAverage,
    poster_path,
    item,
    addToWatchLater,
    addFavoriteFilms,
}) {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(
        listFilmsLater.filter((item) => item.title === title).length !== 0
            ? true
            : false
    );
    const [favoriteChecked, setfavoriteChecked] = useState(
        favoriteFilms.filter((item) => item.title === title).length !== 0
            ? true
            : false
    );
    const isAuthorization = useSelector((state) => state.isAuthorization);

    function CheckedAdd() {
        setChecked(!checked);
    }
    function CheckedAddFavorite() {
        setfavoriteChecked(!favoriteChecked);
    }

    function filmDescription() {
        dispatch({ type: 'filmDescription', payload: item });
    }

    return (
        <div className="film-card">
            <div className="film-card_wrapper">
                <div className="film-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        className="img-card"
                        alt="#"
                    />
                </div>
                <div className="film-info">
                    <div className="rate">
                        <span className="film-rate">
                            Рейтинг: {voteAverage}
                        </span>

                        {isAuthorization ? (
                            <div className="films-favorite">
                                <svg
                                    onClick={() => {
                                        CheckedAddFavorite();
                                        return addFavoriteFilms(item, title);
                                    }}
                                    fill={
                                        favoriteChecked === true
                                            ? 'yellow'
                                            : 'black'
                                    }
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 32 32"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>star</title>
                                    <path d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005zM20.779 18.461c-0.188 0.138-0.309 0.358-0.309 0.607 0 0.083 0.014 0.163 0.039 0.238l-0.002-0.005 2.514 7.736-6.581-4.783c-0.122-0.089-0.275-0.143-0.44-0.143s-0.318 0.053-0.443 0.144l0.002-0.002-6.581 4.783 2.514-7.736c0.024-0.070 0.037-0.15 0.037-0.233 0-0.249-0.121-0.469-0.307-0.605l-0.002-0.001-6.58-4.78h8.134c0 0 0.001 0 0.001 0 0.331 0 0.612-0.215 0.71-0.513l0.002-0.005 2.514-7.735 2.514 7.735c0.1 0.303 0.381 0.519 0.713 0.519 0 0 0 0 0 0h8.135z"></path>
                                </svg>
                                <svg
                                    onClick={() => {
                                        CheckedAdd();
                                        return addToWatchLater(item, title);
                                    }}
                                    width="26px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={checked === true ? 'yellow' : 'black'}
                                >
                                    <path d="M3.5 3C3.5 1.89543 4.39543 1 5.5 1H18.5C19.6046 1 20.5 1.89543 20.5 3V22C20.5 22.3612 20.3052 22.6944 19.9904 22.8715C19.6756 23.0486 19.2897 23.0422 18.981 22.8548L12 18.6157L5.01903 22.8548C4.71028 23.0422 4.32441 23.0486 4.00961 22.8715C3.6948 22.6944 3.5 22.3612 3.5 22V3ZM18.5 3L5.5 3V20.2228L11.481 16.591C11.7999 16.3974 12.2001 16.3974 12.519 16.591L18.5 20.2228V3Z" />
                                </svg>
                            </div>
                        ) : (
                            <div className="films-favorite">
                                <Link to="./authorization">
                                    <img
                                        src={star}
                                        alt="star"
                                        className="add-to-favorites"
                                    />
                                </Link>
                                <Link to="./authorization">
                                    <img
                                        src={bookmark}
                                        alt=""
                                        className="watch-later"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                    <h3 className="film-title">{title}</h3>
                    <div className="film-details">
                        <Link
                            onClick={filmDescription}
                            to="./film-description"
                            title={title}
                            className="film-more-link"
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
