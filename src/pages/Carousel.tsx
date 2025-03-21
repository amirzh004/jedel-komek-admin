import React, {useEffect, useState} from 'react';
import {ICarousel} from "../models/ICarousel.ts";
import {fetchCarousel} from "../api/api.tsx";

export interface IPage {
    setShowAddModal: (value: boolean) => void;
    setShowDeleteModal: (value: boolean) => void;
    refresh: number;
    setCurrentId: (value: number) => void;
}

const Carousel: React.FC<IPage> = ({setShowAddModal, setShowDeleteModal, refresh, setCurrentId}) => {
    // const [isShow, setIsShow] = useState<boolean>(false);
    const [carousel, setCarousel] = useState<ICarousel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getCarousel = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchCarousel(); // Fetch data from the API
                setCarousel(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить категории. Попробуйте позже.');
                console.error('Failed to fetch categories:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getCarousel();
    }, [refresh]);

    const handleDelete = (id: number) => {
        setCurrentId(id);
        setShowDeleteModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Карусель</h1>
                <button className={'add__button'} onClick={() => setShowAddModal(true)}>+ Добавить</button>
            </div>
            <div className={'table__container'}>
                {loading ? (
                    <div className="loading">
                        <p>Загрузка...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Изображение</th>
                                <th className={'w-min'}>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carousel.length > 0 ? (
                                carousel.map((carousel) => (
                                <tr key={carousel.id}>
                                    <td><img src={carousel.image_path} alt={''}/></td>
                                    <td className={'w-min'}>
                                        <div className={'manage__buttons'}>
                                            {/*<button className={`${isShow ? 'active' : 'inactive'}`}*/}
                                            {/*        onClick={() => setIsShow(!isShow)}>*/}
                                            {/*    {isShow ?*/}
                                            {/*        <img src={'/showIcon.svg'} alt={''}/>*/}
                                            {/*        :*/}
                                            {/*        <img src={'/hideIcon.svg'} alt={''}/>*/}
                                            {/*    }*/}
                                            {/*</button>*/}
                                            <button className={'delete__button'} onClick={() => handleDelete(carousel.id)}>
                                                <img src={'/deleteIcon.svg'} alt={''}/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8}>Нет данных</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Carousel;