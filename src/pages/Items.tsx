import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
import {IItem} from "../models/IItem.ts";
import {fetchCategories, fetchItemsByCategoryId} from "../api/api.tsx";
import {ICategory} from "../models/ICategory.ts";

const Items: React.FC<IPage & {setCurrentObject: (value: IItem) => void, setCurrentCategoryId: (value: number) => void}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, refresh, setCurrentId, setCurrentObject, setCurrentCategoryId}) => {
    // const [isShow, setIsShow] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>(0); // selected category ID
    const [items, setItems] = useState<IItem[]>([]); // Store fetched items
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [error, setError] = useState<string | null>(null);

    // Fetch categories on component mount
    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
                setError('Не удалось загрузить категории.');
            }
        };
        getCategories();
    }, []);

    useEffect(() => {
        const getItems = async () => {
            const categoryId = selectedCategory;
            if (categoryId) {
                setLoading(true);
                try {
                    const itemsData = await fetchItemsByCategoryId(Number(categoryId));
                    setItems(itemsData);
                } catch (error) {
                    console.error("Failed to fetch items:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setItems([]); // Clear items if "all" is selected
            }
        };
        getItems();
    }, [refresh]);

    // Fetch items by selected category
    const handleCategoryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = e.target.value;
        setSelectedCategory(parseInt(categoryId));
        if (categoryId !== "") {
            setLoading(true);
            try {
                const itemsData = await fetchItemsByCategoryId(Number(categoryId));
                setItems(itemsData);
                console.log(itemsData);
            } catch (error) {
                console.error("Failed to fetch items:", error);
            } finally {
                setLoading(false);
            }
        } else {
            setItems([]); // Clear items if "all" is selected
        }
    };

    const handleAdd = (id: number) => {
        setCurrentCategoryId(id);
        setShowAddModal(true);
    };

    // Handle editing an item
    const handleEdit = (id: number, data: IItem) => {
        setCurrentId(id);
        setCurrentObject(data); // Set current item for editing
        setShowEditModal(true); // Show the edit modal
    };

    // Handle deleting an item
    const handleDelete = (id: number, data: IItem) => {
        setCurrentId(id);
        setCurrentObject(data); // Set current item for deletion
        setShowDeleteModal(true); // Show the delete modal
    };

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Товары</h1>
                <button className={"add__button"} onClick={() => handleAdd(selectedCategory)}>
                    + Добавить
                </button>
                <select name={"category"} value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Выберите категорию</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
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
                                <th>Цена</th>
                                <th>Фото 1</th>
                                <th>Фото 2</th>
                                <th className={'w-min'}>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 ? (
                                items.map((item) => (
                                <tr key={item.id}>
                                    <td><p>{item.title}</p></td>
                                    <td><p>{item.description}</p></td>
                                    <td><p>{item.price}</p></td>
                                    <td className={'small__image'}><img src={item.images[0]} alt={item.title}/></td>
                                    <td className={'small__image'}><img src={item.images[1]} alt={item.title}/></td>
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
                                            <button className={'edit__button'} onClick={() => handleEdit(item.id, item)}>
                                                <img src={'/editIcon.svg'} alt={''}/>
                                            </button>
                                            <button className={'delete__button'} onClick={() => handleDelete(item.id, item)}>
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

export default Items;