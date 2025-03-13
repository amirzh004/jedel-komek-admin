import React, {useState} from "react";
import {IPage} from "../models/IPage.ts";

const Categories: React.FC<IPage> = ({setShowAddModal, setShowDeleteModal, setShowEditModal}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

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
                    <tr>
                        <td><p>asd</p></td>
                        <td className={'image'}><img src={'/logo.svg'} alt={''}/></td>
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
                                <button className={'edit__button'} onClick={() => setShowEditModal(true)}>
                                    <img src={'/editIcon.svg'} alt={''}/>
                                </button>
                                <button className={'delete__button'} onClick={() => setShowDeleteModal(true)}>
                                    <img src={'/deleteIcon.svg'} alt={''}/>
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Categories;