import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
import {fetchNews} from "../api/api.tsx";

const PoliceStations: React.FC<IPage & {setCurrentObject: (value: any) => void;}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, refresh, setCurrentId, setCurrentObject}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchNews(); // Fetch data from the API
                setNews(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить категории. Попробуйте позже.');
                console.error('Failed to fetch categories:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getCategories();
    }, [refresh]);

    const handleEdit = (id: number, data: any) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    const handleDelete = (id: number, data: any) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowDeleteModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Категории</h1>
                <button className={'add__button'} onClick={() => setShowAddModal(true)}>+ Добавить</button>
            </div>
            <div className={'table__container'}>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Номер телефона</th>
                            <th>Адрес</th>
                            <th>Рабочие дни</th>
                            <th>Рабочее время</th>
                            <th>Долгота</th>
                            <th>Широта</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {news.map((category) => (
                            <tr key={category.id}>
                                <td><p>{category.name}</p></td>
                                <td><p>{category.phone_number}</p></td>
                                <td><p>{category.adress}</p></td>
                                <td><p>{category.work_days}</p></td>
                                <td><p>{category.work_time}</p></td>
                                <td><p>{category.longitude}</p></td>
                                <td><p>{category.latitude}</p></td>
                                <td className={'w-min'}>
                                    <div className={'manage__buttons'}>
                                        <button className={'edit__button'} onClick={() => handleEdit(category.id, category)}>
                                            <img src={'/editIcon.svg'} alt={''}/>
                                        </button>
                                        <button className={'delete__button'} onClick={() => handleDelete(category.id, category)}>
                                            <img src={'/deleteIcon.svg'} alt={''}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default PoliceStations;