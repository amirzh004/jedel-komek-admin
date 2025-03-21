import React, {useEffect, useState} from 'react';
import {editSocialLink} from "../../api/api.tsx";
import {IModal} from "../../models/IModal.ts";
import {ISocialLink} from "../../models/ISocialLink.ts";

const EditSocialLinkModal: React.FC<IModal & {id: number, data: ISocialLink}> = ({showModal, setShowModal, refresh, setRefresh, data, id}) => {
    const [link, setLink] = useState('');
    const [icon, setIcon] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setLink(data.link);
        }
    }, [data]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setIcon(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('link', link);
        if (icon) {
            formData.append('icon', icon);
        }

        try {
            await editSocialLink(id, formData);
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error editing category:', error);
            setError('Ошибка редактирования категории');
        }
    };

    return (
        <div onClick={() => setShowModal(false)} className={`modal__background ${showModal ? "active" : ""}`}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2>Редактировать ссылку</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <div className="input__container">
                            <label htmlFor="link">Ссылка</label>
                            <input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Ссылка" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="icon">Иконка</label>
                            <div className="current-image">
                                <input type="file" id="icon" onChange={handleImageChange} />
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="submit__button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSocialLinkModal;