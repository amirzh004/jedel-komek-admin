import React from 'react';
import {IModal} from '../../models/IModal';

const AddCategoryModal: React.FC<IModal> = ({showModal, setShowModal}) => {
    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className={`modal__header`}>
                    <h2>Добавить категорию</h2>
                    <button className={'close__button'} onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'30px'} width={'30px'} fill="none"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form action="">
                    <div className="modal__body">
                        <div className={'input__container'}>
                            <label htmlFor="name">Название</label>
                            <input type="text" id={'name'} name={'name'} placeholder={'Название'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="image">Фото</label>
                            <input type="file" id={'image'} name={'image'}/>
                        </div>
                        <button type={'submit'} className={'submit__button'}>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategoryModal;
