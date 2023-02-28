import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DefaultStateInterface } from '../elements/elements';
import './Header.css';

export function Header() {
    const dispatch = useDispatch();
    const AuthorizationLS: boolean | string = JSON.parse(
        localStorage.getItem('isAuthorization') || ''
    );
    const isAuthorization = useSelector(
        (state: DefaultStateInterface) => state.isAuthorization
    );

    useEffect(() => {
        if (AuthorizationLS) {
            dispatch({ type: 'exampleAuthorization', payload: true });
        }
    }, []);

    function signInHandler() {
        if (isAuthorization) {
            dispatch({ type: 'exampleAuthorization', payload: false });
            localStorage.setItem('isAuthorization', JSON.stringify(false));
        }
    }
    return (
        <header className="header">
            <div className="container">
                <ul className="menu-list">
                    <li className="menu-list__item">
                        <button className="home-btn">
                            <Link to="/" className="menu-list__link">
                                Главная
                            </Link>
                        </button>
                    </li>
                    <li className="menu-list__item">
                        <button className="auth-btn" onClick={signInHandler}>
                            <Link
                                to="/authorization"
                                className="menu-list__link"
                            >
                                {isAuthorization ? 'Выйти' : 'Войти'}
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
