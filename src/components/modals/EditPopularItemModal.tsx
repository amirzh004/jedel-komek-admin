import React, {useEffect, useState} from 'react';
import {IModal} from "../../models/IModal.ts";
import {IPopularItems} from "../../models/IPopularItems.ts";
import {editPopularItem} from "../../api/api.tsx";

const EditPopularItemModal: React.FC<IModal & {id: number, data: IPopularItems}> = ({showModal, setShowModal, data, id, refresh, setRefresh}) => {
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setTitle(data.title);
        }
    }, [data]);

    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideoUrl(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        if (videoUrl) {
            formData.append('video_url', videoUrl);
        }

        try {
            await editPopularItem(id, formData);
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error editing category:', error);
            setError('Ошибка редактирования популярных товаров');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="modal__body">
                        <div className={'input__container'}>
                            <label htmlFor="title">Название</label>
                            <input type="text" id={'title'} name={'title'}  value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Название'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="video">Видео</label>
                            <input type="file" id={'video'} name={'video'} onChange={handleVideoChange}/>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type={'submit'} className={'submit__button'}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPopularItemModal;