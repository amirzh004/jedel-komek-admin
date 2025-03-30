import React, {useState} from 'react';
import {IModal} from "../../models/IModal.ts";
import {ICategory} from "../../models/ICategory.ts";
import {deleteEducation} from "../../api/api.tsx";

const DeleteEducationalModal: React.FC<IModal & {id: number, data: ICategory}> = ({showModal, setShowModal, id, data, refresh, setRefresh}) => {
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;
        setError(null);
        try {
            await deleteEducation(id);
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (err) {
            console.error('Error deleting category:', err);
            setError('Ошибка при удалении категории');
        }
    };

    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? 'active' : ''}`}>
            <div className="delete__modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Удалить категорию</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleDelete}>
                    <div className="modal__body">
                        <p>
                            Вы уверены, что хотите удалить категорию {data.name}?
                        </p>
                        {error && <p className="error">{error}</p>}
                        <div className="buttons">
                            <button type="submit" className="submit__button" style={{ backgroundColor: 'red' }}>
                                Удалить
                            </button>
                            <div
                                className="submit__button"
                                onClick={() => setShowModal(false)}
                                style={{ backgroundColor: '#ddd', color: 'black', width: '100%', textAlign: 'center' }}
                            >
                                Отмена
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteEducationalModal;