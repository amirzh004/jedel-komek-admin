import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
import {ICategory} from "../models/ICategory.ts";
import {fetchCategories} from "../api/api.tsx";
// import {useNavigate} from "react-router-dom";
// import {isAuthenticated} from "../api/auth.tsx";

const Categories: React.FC<IPage & {setCurrentObject: (value: ICategory) => void;}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, refresh, setCurrentId, setCurrentObject}) => {
    // const navigate = useNavigate();
    // const [isShow, setIsShow] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');
        const getCategories = async () => {
            setLoading(true); // Set loading to true before sending the request
            setError(''); // Reset any previous error

            try {
                const data = await fetchCategories(); // Fetch data from the API
                setCategories(data); // Update categories state with the fetched data
            } catch (error) {
                setError('Не удалось загрузить категории. Попробуйте позже.');
                console.error('Failed to fetch categories:', error);
            } finally {
                setLoading(false); // Set loading to false once the request is completed
            }
        };

        getCategories();
    }, [refresh]);

    const handleEdit = (id: number, data: ICategory) => {
        setCurrentId(id);
        setCurrentObject(data);
        setShowEditModal(true);
    }

    const handleDelete = (id: number, data: ICategory) => {
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
                                <th>Фото</th>
                                <th className={'w-min'}>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td><p>{category.name}</p></td>
                                    <td className={'image'}><img src={category.image} alt={''}/></td>
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

export default Categories;