import './authorization.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export function Authorization() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuthorization = useSelector((state) => state.isAuthorization);

    function formHandler(e) {
        e.preventDefault();
        console.log(login, password);
        if (login === 'Инал' && password === 'Лукьяев') {
            console.log('Добро Пожаловать');
            dispatch({ type: 'exampleAuthorization', payload: true });
            localStorage.setItem('isAuthorization', JSON.stringify(true));
        } else {
            localStorage.setItem('isAuthorization', JSON.stringify(false));
        }
    }

    return (
        <div>
            {isAuthorization ? null : (
                <div className="authorization-block">
                    <div className="wrapper">
                        <div className="close">
                            <Link to="/">X</Link>
                        </div>
                        <form
                            className="form-authorization"
                            onSubmit={formHandler}
                        >
                            <label htmlFor="">Логин</label>
                            <input
                                type="text"
                                className="login"
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <label htmlFor="">Пороль</label>
                            <input
                                type="text"
                                className="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="comeIn-btn">
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
