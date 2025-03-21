// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from "./pages/Categories.tsx";
import Items from "./pages/Items.tsx";
import Carousel from "./pages/Carousel.tsx";
import HomeTexts from "./pages/HomeTexts.tsx";
import PopularItems from "./pages/PopularItems.tsx";
import './App.css';
import AddCategoryModal from "./components/modals/AddCategoryModal.tsx";
import AddCarouselModal from "./components/modals/AddCarouselModal.tsx";
import AddItemModel from "./components/modals/AddItemModel.tsx";
import AddPopularItemModal from "./components/modals/AddPopularItemModal.tsx";
import EditItemModel from "./components/modals/EditItemModel.tsx";
import EditPopularItemModal from "./components/modals/EditPopularItemModal.tsx";
import EditCategoryModal from "./components/modals/EditCategoryModal.tsx";
import DeleteCategoryModal from "./components/modals/DeleteCategoryModal.tsx";
import DeleteCarouselModal from "./components/modals/DeleteCarouselModal.tsx";
import DeleteItemModal from "./components/modals/DeleteItemModal.tsx";
import DeletePopularItemModal from "./components/modals/DeletePopularItemModal.tsx";
import Login from "./pages/Login.tsx";
import {ICategory} from "./models/ICategory.ts";
import {IItem} from "./models/IItem.ts";
import {IPopularItems} from "./models/IPopularItems.ts";
import {IHomeTexts} from "./models/IHomeTexts.ts";
import {IFooterTexts} from "./models/IFooterTexts.ts";
import {ISocialLink} from "./models/ISocialLink.ts";
import SocialLinks from "./pages/SocialLinks.tsx";
import FooterTexts from "./pages/FooterTexts.tsx";
import EditHomeTextModal from "./components/modals/EditHomeTextModal.tsx";
import EditFooterTextModal from "./components/modals/EditFooterTextModal.tsx";
import EditSocialLinkModal from "./components/modals/EditSocialLinkModal.tsx";

const AppContent: React.FC = () => {
    const location = useLocation();

    const [refresh, setRefresh] = useState<number>(0);
    const [currentId, setCurrentId] = useState<number>(0);
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);

    const [currentCategory, setCurrentCategory] = useState<ICategory>({id: -1, image: '', name: ''});
    const [currentItem, setCurrentItem] = useState<IItem>({id: -1, title: '', images: [], price: '', description: '', category_id: -1});
    const [currentPopularItem, setCurrentPopularItem] = useState<IPopularItems>({id: -1, title: '', video_url: ''});
    const [currentHomeText, setCurrentHomeText] = useState<IHomeTexts>({id: -1, description: '', title: ''});
    const [currentFooterText, setCurrentFooterText] = useState<IFooterTexts>({id: -1, description1: '', description2: '', title1: '', title2: ''});
    const [currentSocialLink, setCurrentSocialLink] = useState<ISocialLink>({id: -1, link: '', icon: ''});

    // Define your modal state variables
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [showAddCarouselModal, setShowAddCarouselModal] = useState(false);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [showAddPopularItemModal, setShowAddPopularItemModal] = useState(false);

    const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
    const [showEditItemModal, setShowEditItemModal] = useState(false);
    const [showEditPopularItemModal, setShowEditPopularItemModal] = useState(false);
    const [showEditHomeTextModal, setShowEditHomeTextModal] = useState(false);
    const [showEditFooterTextModal, setShowEditFooterTextModal] = useState(false);
    const [showEditSocialLinksModal, setShowEditSocialLinksModal] = useState(false);

    const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
    const [showDeleteCarouselModal, setShowDeleteCarouselModal] = useState(false);
    const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
    const [showDeletePopularItemModal, setShowDeletePopularItemModal] = useState(false);

    return (
        <div className={location.pathname !== "/" ? `wrapper` : `form__wrapper`}>
            {location.pathname !== "/" && <NavBar />}
            {location.pathname !== "/" ? (
                <div className="main__content">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="/admin/categories"
                            element={
                                <Categories
                                    setShowEditModal={setShowEditCategoryModal}
                                    setShowDeleteModal={setShowDeleteCategoryModal}
                                    setShowAddModal={setShowAddCategoryModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentCategory}
                                />
                            }
                        />
                        <Route
                            path="/admin/items"
                            element={
                                <Items
                                    setShowEditModal={setShowEditItemModal}
                                    setShowDeleteModal={setShowDeleteItemModal}
                                    setShowAddModal={setShowAddItemModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentItem}
                                    setCurrentCategoryId={setCurrentCategoryId}
                                />
                            }
                        />
                        <Route
                            path="/admin/carousel"
                            element={
                                <Carousel
                                    setShowDeleteModal={setShowDeleteCarouselModal}
                                    setShowAddModal={setShowAddCarouselModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                />
                            }
                        />
                        <Route
                            path="/admin/popular-items"
                            element={
                                <PopularItems
                                    setShowAddModal={setShowAddPopularItemModal}
                                    setShowDeleteModal={setShowDeletePopularItemModal}
                                    setShowEditModal={setShowEditPopularItemModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentPopularItem}
                                />
                            }
                        />
                        <Route
                            path="/admin/hometexts"
                            element={
                                <HomeTexts
                                    setCurrentObject={setCurrentHomeText}
                                    setShowEditModal={setShowEditPopularItemModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                />
                            }
                        />
                        <Route
                            path="/admin/footertexts"
                            element={
                                <FooterTexts
                                    setShowEditModal={setShowEditFooterTextModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentFooterText}
                                />
                            }
                        />
                        <Route
                            path="/admin/sociallinks"
                            element={
                                <SocialLinks
                                    setShowEditModal={setShowEditSocialLinksModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentSocialLink}
                                />
                            }
                        />
                    </Routes>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/admin/categories"
                        element={
                            <Categories
                                setShowEditModal={setShowEditCategoryModal}
                                setShowDeleteModal={setShowDeleteCategoryModal}
                                setShowAddModal={setShowAddCategoryModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentCategory}
                            />
                        }
                    />
                    <Route
                        path="/admin/items"
                        element={
                            <Items
                                setShowEditModal={setShowEditItemModal}
                                setShowDeleteModal={setShowDeleteItemModal}
                                setShowAddModal={setShowAddItemModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentItem}
                                setCurrentCategoryId={setCurrentCategoryId}
                            />
                        }
                    />
                    <Route
                        path="/admin/carousel"
                        element={
                            <Carousel
                                setShowDeleteModal={setShowDeleteCarouselModal}
                                setShowAddModal={setShowAddCarouselModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                            />
                        }
                    />
                    <Route
                        path="/admin/popular-items"
                        element={
                            <PopularItems
                                setShowAddModal={setShowAddPopularItemModal}
                                setShowDeleteModal={setShowDeletePopularItemModal}
                                setShowEditModal={setShowEditPopularItemModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentPopularItem}
                            />
                        }
                    />
                    <Route
                        path="/admin/hometexts"
                        element={
                            <HomeTexts
                                setCurrentObject={setCurrentHomeText}
                                setShowEditModal={setShowEditPopularItemModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                            />
                        }
                    />
                    <Route
                        path="/admin/footertexts"
                        element={
                            <FooterTexts
                                setShowEditModal={setShowEditFooterTextModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentFooterText}
                            />
                        }
                    />
                    <Route
                        path="/admin/sociallinks"
                        element={
                            <SocialLinks
                                setShowEditModal={setShowEditSocialLinksModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentSocialLink}
                            />
                        }
                    />
                </Routes>
            )}
            {/* Modals */}
            <AddCategoryModal showModal={showAddCategoryModal} setShowModal={setShowAddCategoryModal} setRefresh={setRefresh} refresh={refresh} />
            <AddCarouselModal showModal={showAddCarouselModal} setShowModal={setShowAddCarouselModal} setRefresh={setRefresh} refresh={refresh} />
            <AddItemModel showModal={showAddItemModal} setShowModal={setShowAddItemModal} categoryId={currentCategoryId} setRefresh={setRefresh} refresh={refresh} />
            <AddPopularItemModal showModal={showAddPopularItemModal} setShowModal={setShowAddPopularItemModal} setRefresh={setRefresh} refresh={refresh} />

            <EditCategoryModal showModal={showEditCategoryModal} id={currentId} data={currentCategory} setShowModal={setShowEditCategoryModal} setRefresh={setRefresh} refresh={refresh} />
            <EditItemModel showModal={showEditItemModal} id={currentId} data={currentItem} setShowModal={setShowEditItemModal} setRefresh={setRefresh} refresh={refresh} />
            <EditPopularItemModal showModal={showEditPopularItemModal} id={currentId} data={currentPopularItem} setShowModal={setShowEditPopularItemModal} setRefresh={setRefresh} refresh={refresh} />
            <EditHomeTextModal showModal={showEditHomeTextModal} id={currentId} data={currentHomeText} setShowModal={setShowEditHomeTextModal} setRefresh={setRefresh} refresh={refresh} />
            <EditFooterTextModal showModal={showEditFooterTextModal} id={currentId} data={currentFooterText} setShowModal={setShowEditFooterTextModal} setRefresh={setRefresh} refresh={refresh} />
            <EditSocialLinkModal showModal={showEditSocialLinksModal} id={currentId} data={currentSocialLink} setShowModal={setShowEditSocialLinksModal} setRefresh={setRefresh} refresh={refresh} />

            <DeleteCategoryModal showModal={showDeleteCategoryModal} id={currentId} data={currentCategory} setShowModal={setShowDeleteCategoryModal} setRefresh={setRefresh} refresh={refresh} />
            <DeleteCarouselModal showModal={showDeleteCarouselModal} id={currentId} setShowModal={setShowDeleteCarouselModal} setRefresh={setRefresh} refresh={refresh} />
            <DeleteItemModal showModal={showDeleteItemModal} id={currentId} data={currentItem} setShowModal={setShowDeleteItemModal} setRefresh={setRefresh} refresh={refresh} />
            <DeletePopularItemModal showModal={showDeletePopularItemModal} id={currentId} data={currentPopularItem} setShowModal={setShowDeletePopularItemModal} setRefresh={setRefresh} refresh={refresh} />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
