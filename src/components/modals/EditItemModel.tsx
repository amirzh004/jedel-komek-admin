import React from 'react';
import {IModal} from "../../models/IModal.ts";

const EditItemModel: React.FC<IModal> = ({showModal, setShowModal}) => {
    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className={`modal__header`}>
                    <h2>Редактировать товар</h2>
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
                            <label htmlFor="description">Описание</label>
                            <input type="text" id={'description'} name={'description'} placeholder={'Описание'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="price">Цена</label>
                            <input type="text" id={'price'} name={'price'} placeholder={'Цена'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="first_image">Фото 1</label>
                            <input type="file" id={'first_image'} name={'first_image'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="second_image">Фото 2</label>
                            <input type="file" id={'second_image'} name={'second_image'}/>
                        </div>
                        <button type={'submit'} className={'submit__button'}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItemModel;