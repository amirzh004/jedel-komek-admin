import React from 'react';

const Texts: React.FC = () => {
    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Текста</h1>
            </div>
            <form>
                <div className={'list'}>
                    <div className={'item'}>
                        <p>Заголовок 1</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Подзаголовок 1</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Заголовок 2</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Подзаголовок 2</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Заголовок 3</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Подзаголовок 3</p>
                        <textarea value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Ссылка на Whatsapp</p>
                        <input type={'text'} value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Ссылка на Telegram</p>
                        <input type={'text'} value={'adsa'}/>
                    </div>
                    <div className={'item'}>
                        <p>Ссылка на Instagram</p>
                        <input type={'text'} value={'adsa'}/>
                    </div>
                    <button className={'add__button'} onClick={() => {
                    }}>
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Texts;