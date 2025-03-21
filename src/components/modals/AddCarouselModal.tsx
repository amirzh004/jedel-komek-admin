import React, {useState} from 'react';
import {IModal} from "../../models/IModal.ts";
import {createBanner} from "../../api/api.tsx";

const AddCarouselModal: React.FC<IModal> = ({showModal, setShowModal, refresh, setRefresh}) => {
    const [imagePath, setImagePath] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImagePath(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (imagePath) {
            formData.append('image_path', imagePath);
        }

        try {
            await createBanner(formData);
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
                <div className={`modal__header`}>
                    <h2>Добавить в карусель</h2>
                    <button className={'close__button'} onClick={() => setShowModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'30px'} width={'30px'} fill="none"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <div className={'input__container'}>
                            <label htmlFor="image_path">Изображение</label>
                            <input type="file" id={'image_path'} name={'image_path'} onChange={handleImageChange}/>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type={'submit'} className={'submit__button'}>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCarouselModal;