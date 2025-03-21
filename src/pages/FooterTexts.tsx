import React, {useEffect, useState} from 'react';
import {fetchFooterTexts} from "../api/api.tsx";
import {IFooterTexts} from "../models/IFooterTexts.ts";
import {IPageEdit} from "../models/IPageEdit.ts";

const FooterTexts: React.FC<IPageEdit & {setCurrentObject: (value: IFooterTexts) => void}> = ({setShowEditModal, setCurrentId, refresh, setCurrentObject}) => {
    const [footerTexts, setFooterTexts] = useState<IFooterTexts[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getFooterTexts = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchFooterTexts(); // Fetch data from the API
                setFooterTexts(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить текста. Попробуйте позже.');
                console.error('Не удалось загрузить текста:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getFooterTexts();
    }, [refresh]);

    const handleEdit = (id: number, data: IFooterTexts) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Текст Контактов</h1>
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
                            <th>Название 1</th>
                            <th>Описание 1</th>
                            <th>Название 2</th>
                            <th>Описание 2</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {footerTexts.length > 0 ? (
                            footerTexts.map((footerTexts) => (
                                <tr key={footerTexts.id}>
                                    <td><p>{footerTexts.title1}</p></td>
                                    <td><p>{footerTexts.description1}</p></td>
                                    <td><p>{footerTexts.title2}</p></td>
                                    <td><p>{footerTexts.description2}</p></td>
                                    <td className={'w-min'}>
                                        <div className={'manage__buttons'}>
                                            <button className={'edit__button'} onClick={() => handleEdit(footerTexts.id, footerTexts)}>
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

export default FooterTexts;