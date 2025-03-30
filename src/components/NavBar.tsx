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
                                 to="/admin/news">Новости</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/educational">Образ. контент</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/police-stations">Полицейские участки</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/attentions">Предупреждения</NavLink>
                    </li>
                    <li className={'item'}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/chat">Чат</NavLink>
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
                                 to="/admin/news">Новости</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/educational">Образ. контент</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/police-stations">Полицейские участки</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/attentions">Предупреждения</NavLink>
                    </li>
                    <li className={'item'} onClick={() => setOpenMenu(false)}>
                        <NavLink className={({isActive}) => isActive ? "link__active" : "link"}
                                 to="/admin/chat">Чат</NavLink>
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
