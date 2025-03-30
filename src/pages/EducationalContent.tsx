import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
// import {fetchNews} from "../api/api.tsx";

const educationData = [
    {
        id: 1,
        media: "/educational1.jpg",
        title: "Основы безопасности",
        description:
            "Данный образовательный модуль предоставляет базовые знания о принципах личной и общественной безопасности, методах предотвращения угроз и мерах предосторожности, необходимых для защиты себя и близких.",
    },
    {
        id: 2,
        media: "/educational2.jpg",
        title: "Профилактика правонарушений",
        description:
            "Этот курс обучает практическим методам предотвращения правонарушений, включая рекомендации по распознанию потенциальных угроз, эффективному взаимодействию с правоохранительными органами и созданию безопасной среды в вашем районе.",
    },
    {
        id: 3,
        media: "/educational3.jpg",
        title: "Как взаимодействовать с полицией",
        description:
            "Образовательный материал, который подробно рассказывает о том, как правильно и эффективно взаимодействовать с сотрудниками полиции, какие вопросы можно задавать и как действовать в экстренных ситуациях для защиты своих прав.",
    },
    {
        id: 4,
        media: "/educational4.jpg",
        title: "Личная безопасность",
        description:
            "Пошаговые рекомендации по обеспечению личной безопасности в повседневной жизни и в чрезвычайных ситуациях, включая советы по самообороне и поведению в опасных ситуациях.",
    },
    {
        id: 5,
        media: "/educational5.jpg",
        title: "Защита информации",
        description:
            "Модуль, посвященный основам кибербезопасности и методам защиты персональных данных. Узнайте, как обезопасить свои устройства и личную информацию в цифровом мире.",
    },
];

const EducationalContent: React.FC<IPage & {setCurrentObject: (value: any) => void;}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, refresh, setCurrentId, setCurrentObject}) => {
    // const [news, setNews] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string>('');
    //
    // useEffect(() => {
    //     const getCategories = async () => {
    //         setLoading(true); // Set loading to true before sending the request
    //         setError(''); // Reset any previous error
    //
    //         try {
    //             const data = await fetchNews(); // Fetch data from the API
    //             setNews(data); // Update categories state with the fetched data
    //         } catch (error) {
    //             setError('Не удалось загрузить категории. Попробуйте позже.');
    //             console.error('Failed to fetch categories:', error);
    //         } finally {
    //             setLoading(false); // Set loading to false once the request is completed
    //         }
    //     };
    //
    //     getCategories();
    // }, [refresh]);

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
                <h1>Образовательный контент</h1>
                <button className={'add__button'} onClick={() => setShowAddModal(true)}>+ Добавить</button>
            </div>
            <div className={'table__container'}>
                {/*{loading ? (*/}
                {/*    <div>Loading...</div>*/}
                {/*) : error ? (*/}
                {/*    <div className="error-message">*/}
                {/*        <p>{error}</p>*/}
                {/*    </div>*/}
                {/*) : (*/}
                    <table>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Фото</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                        </thead>
                        <tbody>
                        {educationData.map((category) => (
                            <tr key={category.id}>
                                <td><p>{category.title}</p></td>
                                <td><p>{category.description}</p></td>
                                <td className={'image'}><img src={category.media} alt={''}/></td>
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
                {/*)}*/}
            </div>
        </div>
    );
};

export default EducationalContent;