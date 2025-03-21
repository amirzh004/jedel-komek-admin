import React, {useEffect, useState} from 'react';
import {fetchSocialLinks} from "../api/api.tsx";
import {ISocialLink} from "../models/ISocialLink.ts";
import {IPageEdit} from "../models/IPageEdit.ts";

const SocialLinks: React.FC<IPageEdit & {setCurrentObject: (value: ISocialLink) => void}> = ({setShowEditModal, setCurrentId, refresh, setCurrentObject}) => {
    const [socialLinks, setSocialLinks] = useState<ISocialLink[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getSocialLinks = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchSocialLinks(); // Fetch data from the API
                setSocialLinks(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить категории. Попробуйте позже.');
                console.error('Failed to fetch categories:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getSocialLinks();
    }, [refresh]);

    const handleEdit = (id: number, data: ISocialLink) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Ссылки на социальные сети</h1>
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
                            <th>Иконка</th>
                            <th>Ссылка</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {socialLinks.length > 0 ? (
                            socialLinks.map((socialLink) => (
                                <tr key={socialLink.id}>
                                    <td className={'image'}><img src={socialLink.icon} alt={socialLink.link}/></td>
                                    <td><p>{socialLink.link}</p></td>
                                    <td className={'w-min'}>
                                        <div className={'manage__buttons'}>
                                            <button className={'edit__button'} onClick={() => handleEdit(socialLink.id, socialLink)}>
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

export default SocialLinks;