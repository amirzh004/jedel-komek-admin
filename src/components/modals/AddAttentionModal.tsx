import React, {useState} from 'react';
import {IModal} from '../../models/IModal';
import {createAttention} from "../../api/api.tsx";

const AddAttentionModal: React.FC<IModal> = ({showModal, setShowModal, refresh, setRefresh}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        if (image) {
            formData.append('image', image);
        }

        try {
            await createAttention(formData);
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
                    <h2>Редактировать категорию</h2>
                    <button className="close__button" onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <div className="input__container">
                            <label htmlFor="name">Название</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="image">Фото</label>
                            <div className="current-image">
                                <input type="file" id="image" onChange={handleImageChange} />
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="submit__button">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAttentionModal;
