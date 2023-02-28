import { useSelector } from 'react-redux';
import { DefaultStateInterface } from '../elements/elements';
import { Header } from '../header/Header';
import './film-more.css';

export function FilmMore() {
    const { title, overview, release_date, poster_path, backdrop_path } =
        useSelector((state: DefaultStateInterface) => state.filmDescription);

    return (
        <div className="film-more-inner">
            <Header></Header>

            <div className="container">
                <div className="film-more">
                    <div
                        className="film-more-wrapper"
                        /* style={{
                background: `url(https://image.tmdb.org/t/p/w500${backdrop_path})  no-repeat 93% center / contain`,
                backgroundColor: 'black',
            }} */
                    >
                        <div className="posters">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                                className="img-background"
                            />

                            <div className="film-card_poster">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="film-more__card">
                            <div className="title">{title}</div>
                            <div className="film-descr">{overview}</div>
                            <div className="film-realise__date">
                                Дата выхода : {release_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
