import React from 'react';
import {IModal} from "../../models/IModal.ts";
import {deleteBanner} from "../../api/api.tsx";

const DeleteCarouselModal: React.FC<IModal & {id: number}> = ({showModal, setShowModal, refresh, setRefresh, id}) => {
    const [error, setError] = React.useState<string>('');

    const handleDelete = async () => {
        try {
            await deleteBanner(id); // Send delete request
            setShowModal(false); // Close modal after success
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error deleting banner:', error);
            setError('Ошибка при удалении изображения');
        }
    };

    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="delete__modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Удалить изображение</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form>
                    <div className="modal__body">
                        <p>Вы уверены что хотите удалить изображение из карусели?</p>
                        {error && <p className="error">{error}</p>}
                        <div className="buttons">
                            <button type="button" className="submit__button" style={{ backgroundColor: 'red' }} onClick={handleDelete}>
                                Удалить
                            </button>
                            <div className="submit__button" onClick={() => setShowModal(false)} style={{ backgroundColor: '#ddd' }}>
                                Отмена
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteCarouselModal;