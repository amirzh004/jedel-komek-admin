import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav>
            {/*Logo*/}
            <img src={''} alt={'logo'}/>
            {/*Menu*/}
            <ul className={'list'}>
                <li className={'item'}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={'item'}>
                    <Link to="/">Категории</Link>
                </li>
                <li className={'item'}>
                    <Link to="/">Блюда</Link>
                </li>
            </ul>

            {/*Exit Button*/}
            <ul className={'bottom__list'}>
                <li className={'bottom__item'}>
                    <Link to="/">Выйти</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
