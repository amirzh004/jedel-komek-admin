import React, {useEffect, useState} from 'react';
import {editFooterTexts} from "../../api/api.tsx";
import {IModal} from "../../models/IModal.ts";
import {IFooterTexts} from "../../models/IFooterTexts.ts";

const EditFooterTextModal: React.FC<IModal & {id: number, data: IFooterTexts}> = ({showModal, setShowModal, refresh, setRefresh, data, id}) => {
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setTitle1(data.title1);
            setDescription1(data.description1);
            setTitle2(data.title2);
            setDescription2(data.description2);
        }
    }, [data]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title1', title1);
        formData.append('description1', description1);
        formData.append('title2', title2);
        formData.append('description2', description2);

        try {
            await editFooterTexts(id, formData);
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
                            <label htmlFor="title1">Название 1</label>
                            <input type="text" id="title1" value={title1} onChange={(e) => setTitle1(e.target.value)} placeholder="Название 1" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="description1">Описание 1</label>
                            <input type="text" id="description1" value={description1} onChange={(e) => setDescription1(e.target.value)} placeholder="Описание 1" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="title2">Название 2</label>
                            <input type="text" id="title2" value={title2} onChange={(e) => setTitle2(e.target.value)} placeholder="Название 2" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="description2">Описание 2</label>
                            <input type="text" id="description2" value={description2} onChange={(e) => setDescription2(e.target.value)} placeholder="Описание 2" required />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="submit__button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFooterTextModal;