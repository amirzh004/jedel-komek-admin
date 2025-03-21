import React, {useEffect, useState} from 'react';
import {IPage} from "../models/IPage.ts";
import {IPopularItems} from "../models/IPopularItems.ts";
import {fetchPopularItems} from "../api/api.tsx";

const PopularItems: React.FC<IPage & {setCurrentObject: (value: IPopularItems) => void}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, setCurrentId, refresh, setCurrentObject}) => {
    // const [isShow, setIsShow] = useState<boolean>(false);
    const [popularItems, setPopularItems] = useState<IPopularItems[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getPopularItems = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchPopularItems(); // Fetch data from the API
                setPopularItems(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить категории. Попробуйте позже.');
                console.error('Failed to fetch categories:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getPopularItems();
    }, [refresh]);

    const handleEdit = (id: number, data: IPopularItems) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    const handleDelete = (id: number, data: IPopularItems) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowDeleteModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Популярные товары</h1>
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
                                <th>Название</th>
                                <th>Видео</th>
                                <th className={'w-min'}>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                        {popularItems.length > 0 ? (
                            popularItems.map((popularItem) => (
                            <tr key={popularItem.id}>
                                <td><p>{popularItem.title}</p></td>
                                <td className={'image'}><video src={popularItem.video_url}/></td>
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
                                        <button className={'edit__button'} onClick={() => handleEdit(popularItem.id, popularItem)}>
                                            <img src={'/editIcon.svg'} alt={''}/>
                                        </button>
                                        <button className={'delete__button'} onClick={() => handleDelete(popularItem.id, popularItem)}>
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

export default PopularItems;