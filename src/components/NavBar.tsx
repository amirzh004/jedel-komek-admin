import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!isOpenMenu);
    };

    return (
        <div>
            <nav>
                {/*Logo*/}
                <img src={'/logo.svg'} alt={'logo'}/>
                {/*Menu*/}
                <div className={`menu-toggle ${isOpenMenu ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar middle"></div>
                    <div className="bar"></div>
                </div>

                <ul className={'list'}>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/categories">Категории</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/items">Товары</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/carousel">Карусель</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/popular-items">Популярные
                            товары</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/hometexts">Текста Заголовка</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/footertexts">Текста Контактов</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/sociallinks">Ссылки на соц. сети</NavLink>
                    </li>
                </ul>

                {/*Exit Button*/}
                <ul className={'exit list'} style={{marginTop: 'auto'}}>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/">Выйти</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`menu__list ${isOpenMenu ? 'active' : ''}`}>
                <ul className={'m__list'}>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/categories">Категории</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/items">Товары</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/carousel">Карусель</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/popular-items">Популярные
                            товары</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/hometexts">Текста Заголовка</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/footertexts">Текста Контактов</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/admin/sociallinks">Ссылки на соц. сети</NavLink>
                    </li>
                    <br/>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"} to="/">Выйти</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
