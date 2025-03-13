// src/App.tsx
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home.tsx';
import Categories from "./pages/Categories.tsx";
import Items from "./pages/Items.tsx";
import Carousel from "./pages/Carousel.tsx";
import Texts from "./pages/Texts.tsx";
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

const App: React.FC = () => {
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [showAddCarouselModal, setShowAddCarouselModal] = useState(false);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [showAddPopularItemModal, setShowAddPopularItemModal] = useState(false);
    const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
    const [showEditItemModal, setShowEditItemModal] = useState(false);
    const [showEditPopularItemModal, setShowEditPopularItemModal] = useState(false);
    const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
    const [showDeleteCarouselModal, setShowDeleteCarouselModal] = useState(false);
    const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
    const [showDeletePopularItemModal, setShowDeletePopularItemModal] = useState(false);

    return (
        <Router>
            <div className={'wrapper'}>
                <NavBar />
                <div className={'main__content'}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/carousel" element={<Carousel setShowDeleteModal={setShowDeleteCarouselModal} setShowAddModal={setShowAddCarouselModal} />} />
                        <Route path="/popular-items" element={<PopularItems setShowAddModal={setShowAddPopularItemModal} setShowDeleteModal={setShowDeletePopularItemModal} setShowEditModal={setShowEditPopularItemModal} />} />
                        <Route path="/texts" element={<Texts />} />
                        <Route path="/categories" element={<Categories setShowEditModal={setShowEditCategoryModal} setShowDeleteModal={setShowDeleteCategoryModal} setShowAddModal={setShowAddCategoryModal} />} />
                        <Route path="/items" element={<Items setShowEditModal={setShowEditItemModal} setShowDeleteModal={setShowDeleteItemModal} setShowAddModal={setShowAddItemModal} />} />
                    </Routes>
                </div>
            </div>
            {/* Modals */}
            <AddCategoryModal showModal={showAddCategoryModal} setShowModal={setShowAddCategoryModal} />
            <AddCarouselModal showModal={showAddCarouselModal} setShowModal={setShowAddCarouselModal} />
            <AddItemModel showModal={showAddItemModal} setShowModal={setShowAddItemModal} />
            <AddPopularItemModal showModal={showAddPopularItemModal} setShowModal={setShowAddPopularItemModal} />

            <EditCategoryModal showModal={showEditCategoryModal} setShowModal={setShowEditCategoryModal} />
            <EditItemModel showModal={showEditItemModal} setShowModal={setShowEditItemModal} />
            <EditPopularItemModal showModal={showEditPopularItemModal} setShowModal={setShowEditPopularItemModal} />

            <DeleteCategoryModal showModal={showDeleteCategoryModal} setShowModal={setShowDeleteCategoryModal} />
            <DeleteCarouselModal showModal={showDeleteCarouselModal} setShowModal={setShowDeleteCarouselModal} />
            <DeleteItemModal showModal={showDeleteItemModal} setShowModal={setShowDeleteItemModal} />
            <DeletePopularItemModal showModal={showDeletePopularItemModal} setShowModal={setShowDeletePopularItemModal} />
        </Router>
    );
};

export default App;
