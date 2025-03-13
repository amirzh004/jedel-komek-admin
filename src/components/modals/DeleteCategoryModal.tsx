import React from 'react';
import {IModal} from "../../models/IModal.ts";

const DeleteCategoryModal: React.FC<IModal> = ({showModal, setShowModal}) => {
    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="delete__modal" onClick={(e) => e.stopPropagation()}>
                <div className={`modal__header`}>
                    <h2>Удалить категорию</h2>
                    <button className={'close__button'} onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'30px'} width={'30px'} fill="none"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form action="">
                    <div className="modal__body">
                        <p>Вы уверены что хотите удалить категорию ...?</p>
                        <div className={'buttons'}>
                            <button className={'submit__button'} style={{backgroundColor: 'red'}}>Удалить</button>
                            <div className={'submit__button'} onClick={() => setShowModal(false)} style={{backgroundColor: '#ddd', color: 'black', width: '100%', textAlign: 'center'}}>Отмена</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteCategoryModal;