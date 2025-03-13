import React, {useState} from 'react';

export interface IPage {
    setShowAddModal: (value: boolean) => void;
    setShowDeleteModal: (value: boolean) => void;
}

const Carousel: React.FC<IPage> = ({setShowAddModal, setShowDeleteModal}) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <div className={'container'}>
            <div className={'add__header'}>
                <h1>Карусель</h1>
                <button className={'add__button'} onClick={() => setShowAddModal(true)}>+ Добавить</button>
            </div>
            <div className={'table__container'}>
                <table>
                    <thead>
                        <tr>
                            <th>Изображение</th>
                            <th className={'w-min'}>Управление</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src={'/logo.svg'} alt={''}/></td>
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
                                    <button className={'delete__button'} onClick={() => setShowDeleteModal(true)}>
                                        <img src={'/deleteIcon.svg'} alt={''}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carousel;