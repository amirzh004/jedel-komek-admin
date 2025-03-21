import React, {useEffect, useState} from 'react';
import {IModal} from "../../models/IModal.ts";
import {IItem} from "../../models/IItem.ts";
import {editItem} from "../../api/api.tsx";

const EditItemModel: React.FC<IModal & {id: number, data: IItem}> = ({showModal, setShowModal, data, id, refresh, setRefresh}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
    const [images, setImages] = useState<File[] | []>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
        }
    }, [data]);

    const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage1(e.target.files[0]);
        }
    };

    const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage2(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        if (image1 && image2) {
            formData.append('images', images);
        } else if (image1) {
            formData.append('images', images);
        } else if (image2) {
            formData.append('images', images);
        }

        try {
            await editItem(id, formData);
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });
            setShowModal(false);
            setRefresh(refresh + 1);
        } catch (error) {
            console.error('Error editing item:', error);
            setError('Ошибка редактирования товара');
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
                            <input type="text" id={'title'} name={'title'} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Название'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="description">Описание</label>
                            <input type="text" id={'description'} name={'description'} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Описание'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="price">Цена</label>
                            <input type="text" id={'price'} name={'price'} value={price} onChange={(e) => setPrice(e.target.value)} placeholder={'Цена'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="first_image">Фото 1</label>
                            <input type="file" id={'first_image'} onChange={handleImageChange1} name={'first_image'}/>
                        </div>
                        <div className={'input__container'}>
                            <label htmlFor="second_image">Фото 2</label>
                            <input type="file" id={'second_image'} onChange={handleImageChange2} name={'second_image'}/>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type={'submit'} className={'submit__button'}>Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItemModel;