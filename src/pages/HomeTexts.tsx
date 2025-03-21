import React, {useEffect, useState} from 'react';
import {fetchHomeTexts} from "../api/api.tsx";
import {IHomeTexts} from "../models/IHomeTexts.ts";
import {IPageEdit} from "../models/IPageEdit.ts";

const HomeTexts: React.FC<IPageEdit & {setCurrentObject: (value: IHomeTexts) => void}> = ({setShowEditModal, setCurrentId, refresh, setCurrentObject}) => {
    const [homeTexts, setHomeTexts] = useState<IHomeTexts[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getHomeTexts = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchHomeTexts(); // Fetch data from the API
                setHomeTexts(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить текста. Попробуйте позже.');
                console.error('Не удалось загрузить текста:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getHomeTexts();
    }, [refresh]);

    const handleEdit = (id: number, data: IHomeTexts) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Текст Заголовка</h1>
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
                            <th>Описание</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {homeTexts.length > 0 ? (
                            homeTexts.map((homeTexts) => (
                                <tr key={homeTexts.id}>
                                    <td><p>{homeTexts.title}</p></td>
                                    <td><p>{homeTexts.description}</p></td>
                                    <td className={'w-min'}>
                                        <div className={'manage__buttons'}>
                                            <button className={'edit__button'} onClick={() => handleEdit(homeTexts.id, homeTexts)}>
                                                <img src={'/editIcon.svg'} alt={''}/>
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

export default HomeTexts;