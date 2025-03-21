import React from 'react';
import {IModal} from "../../models/IModal.ts";
import {IItem} from "../../models/IItem.ts";
import {deleteItem} from "../../api/api.tsx";

const DeleteItemModal: React.FC<IModal & {id: number, data: IItem}> = ({showModal, setShowModal, data, id, refresh, setRefresh}) => {
    const [error, setError] = React.useState<string>('');
    const handleDelete = async () => {
        try {
            await deleteItem(id);
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Ошибка при удалении товара');
        }
    };

    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="delete__modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Удалить товар</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form action="">
                    <div className="modal__body">
                        <p>Вы уверены что хотите удалить товар {data.title}?
                        </p>
                        {error && <p className="error">{error}</p>}
                        <div className="buttons">
                            <button type="button" className="submit__button" style={{ backgroundColor: 'red' }} onClick={handleDelete}>
                                Удалить
                            </button>
                            <button type="button" className="submit__button" onClick={() => setShowModal(false)} style={{ backgroundColor: '#ddd' }}>
                                Отмена
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteItemModal;