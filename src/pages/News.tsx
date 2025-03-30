import React, {useEffect, useState} from "react";
import {IPage} from "../models/IPage.ts";
// import {fetchNews} from "../api/api.tsx";

const newsData = [
    {
        id: 1,
        media: '/news5.webp',
        title: "Польские фанаты Димаша Кудайбергена создали настольную игру о Казахстане",
        description:
            'Польский фан-клуб Димаша Кудайбергена отметил Наурыз серией праздничных мероприятий, главным из которых стала презентация уникальной настольной игры "С Димашем по Казахстану"',
        date: "Сегодня",
    },
    {
        id: 2,
        media: '/news4.webp',
        title: "Какая погода ждет жителей Алматы, Астаны и Шымкента 30 марта",
        description:
            "Сегодня в Алматы ожидается дождь, а в Астане и Шымкенте – ясная погода. Температура воздуха будет колебаться от -4 ночью до +16 градусов днем. Прогноз опубликован на портале OpenWeather.",
        date: "Вчера",
    },
    {
        id: 3,
        media: '/news3.webp',
        title: "Ораза айт - 2025: как к нему подготовиться",
        description:
            "Ораза айт – один из самых значимых религиозных праздников для мусульман всего мира, символизирующий окончание священного месяца Рамазан. В 2025 году казахстанцы будут отмечать этот светлый праздник 30 марта.",
        date: "28 март, 2025",
    },
    {
        id: 4,
        media: '/news2.jpg',
        title: "Лошадь влетела в людей на праздновании Наурыза в Жамбылской области",
        description:
            '22 марта 2025 года в селе Кызылшаруа сельского округа Акбулак района Т. Рыскулова во время празднования Наурыза, в ходе театрализованного представления, лошадь, испугавшись, поскакала в сторону зрителей, — говорится в сообщении акимата.',
        date: "23 март, 2025",
    },
    {
        id: 5,
        media: '/news1.webp',
        title: "КНБ выявил преступную схему легализации иностранцев в Казахстане",
        description:
            "Сообщается, что в ходе расследования выявлена схема, позволившая более 120 иностранным гражданам легализоваться в обход законодательства путем фиктивного трудоустройства и прописки по месту жительства.",
        date: "13 март, 2025",
    },
];


const News: React.FC<IPage & {setCurrentObject: (value: any) => void;}> = ({setShowAddModal, setShowDeleteModal, setShowEditModal, refresh, setCurrentId, setCurrentObject}) => {
    // const [news, setNews] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string>('');

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
                <h1>Новости</h1>
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
                                <th>Дата</th>
                                <th>Описание</th>
                                <th>Фото</th>
                                <th className={'w-min'}>Управление</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newsData.map((category) => (
                                <tr key={category.id}>
                                    <td><p>{category.title}</p></td>
                                    <td><p>{category.date}</p></td>
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

export default News;