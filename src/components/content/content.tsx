import { Filters } from '../filters/Filters.js';
import { ListFilms } from '../list-films/ListFilms.js';
import { Authorization } from '../authorization/authorization.js';
import { Outlet } from 'react-router-dom';

import './content.css';

export function Content() {
    return (
        <div className="content-wrapper container">
            <Filters></Filters>
            <Outlet></Outlet>
            <ListFilms></ListFilms>
        </div>
    );
}
