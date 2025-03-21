import React, {useEffect, useState} from 'react';
import {editHomeTexts} from "../../api/api.tsx";
import {IModal} from "../../models/IModal.ts";
import {IHomeTexts} from "../../models/IHomeTexts.ts";

const EditHomeTextModal: React.FC<IModal & {id: number, data: IHomeTexts}> = ({showModal, setShowModal, refresh, setRefresh, data, id}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setDescription(data.description);
        }
    }, [data]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        try {
            await editHomeTexts(id, formData);
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error editing category:', error);
            setError('Ошибка редактирования текста заголовка');
        }
    };

    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Редактировать текст</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <div className="input__container">
                            <label htmlFor="title">Название</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="description">Описание</label>
                            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" required />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="submit__button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditHomeTextModal;