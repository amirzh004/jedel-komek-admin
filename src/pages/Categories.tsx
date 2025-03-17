import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
import {ICategory} from "../models/ICategory.ts";
import {fetchCategories} from "../api/api.tsx";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../api/auth.tsx";

const Categories: React.FC<IPage> = ({setShowAddModal, setShowDeleteModal, setShowEditModal}) => {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            setCategories(data);
            console.log('Categories:', data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        // if (!isAuthenticated()) return navigate('/');

        const loadData = async () => {
            setLoading(true);
            await loadCategories();
        };

        loadData().then(() => setLoading(false));
    }, [refresh]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Категории</h1>
                <button className={'add__button'} onClick={() => setShowAddModal(true)}>+ Добавить</button>
            </div>
            <div className={'table__container'}>
                <table>
                    <tr>
                        <th>Название</th>
                        <th>Фото</th>
                        <th className={'w-min'}>Управление</th>
                    </tr>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td><p>{category.name}</p></td>
                            <td className={'image'}><img src={category.image_path} alt={''}/></td>
                            <td className={'w-min'}>
                                <div className={'manage__buttons'}>
                                    <button className={`${isShow ? 'active' : 'inactive'}`}
                                            onClick={() => setIsShow(!isShow)}>
                                        {isShow ?
                                            <img src={'/showIcon.svg'} alt={''}/>
                                            :
                                            <img src={'/hideIcon.svg'} alt={''}/>
                                        }
                                    </button>
                                    <button className={'edit__button'} onClick={() => {
                                        setCategoryId(category.id);
                                        setShowEditModal(true);
                                    }}>
                                        <img src={'/editIcon.svg'} alt={''}/>
                                    </button>
                                    <button className={'delete__button'} onClick={() => {
                                        setCategoryId(category.id);
                                        setShowDeleteModal(true);
                                    }}>
                                        <img src={'/deleteIcon.svg'} alt={''}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {/*<tr>*/}
                    {/*    <td><p>asd</p></td>*/}
                    {/*    <td className={'image'}><img src={'/logo.svg'} alt={''}/></td>*/}
                    {/*    <td className={'w-min'}>*/}
                    {/*        <div className={'manage__buttons'}>*/}
                    {/*            <button className={`${isShow ? 'active' : 'inactive'}`}*/}
                    {/*                    onClick={() => setIsShow(!isShow)}>*/}
                    {/*                {isShow ?*/}
                    {/*                    <img src={'/showIcon.svg'} alt={''}/>*/}
                    {/*                    :*/}
                    {/*                    <img src={'/hideIcon.svg'} alt={''}/>*/}
                    {/*                }*/}
                    {/*            </button>*/}
                    {/*            <button className={'edit__button'} onClick={() => setShowEditModal(true)}>*/}
                    {/*                <img src={'/editIcon.svg'} alt={''}/>*/}
                    {/*            </button>*/}
                    {/*            <button className={'delete__button'} onClick={() => setShowDeleteModal(true)}>*/}
                    {/*                <img src={'/deleteIcon.svg'} alt={''}/>*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                </table>
            </div>
        </div>
    );
};

export default Categories;