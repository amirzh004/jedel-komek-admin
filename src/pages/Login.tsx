import React from 'react';
import '../login.css'

const Login: React.FC = () => {
    return (
            <div className={'form'}>
                <div className={`form__header`}>
                    <h2>Вход</h2>
                </div>
                <form action="">
                    <div className="form__body">
                        <div className={'input__container'}>
                            <label htmlFor="name">Логин</label>
                            <input type="text" id={'login'} name={'login'} placeholder={'Логин'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="password">Пароль</label>
                            <input type="text" id={'password'} name={'password'} placeholder={'Пароль'}/>
                        </div>
                        <button type={'submit'} className={'submit__button'}>Войти</button>
                    </div>
                </form>
            </div>
    );
};

export default Login;