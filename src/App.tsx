// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from "./pages/News.tsx";
import './App.css';
import AddNewsModal from "./components/modals/AddNewsModal.tsx";
import EditNewsModal from "./components/modals/EditNewsModal.tsx";
import DeleteNewsModal from "./components/modals/DeleteNewsModal.tsx";
import Login from "./pages/Login.tsx";
import EducationalContent from "./pages/EducationalContent.tsx";
import PoliceStations from "./pages/PoliceStations.tsx";
import Attentions from "./pages/Attentions.tsx";
import Chat from "./pages/Chat.tsx";
// import AddEducationalModal from "./components/modals/AddEducationalModal.tsx";
// import AddPoliceStationModal from "./components/modals/AddPoliceStationModal.tsx";
// import AddAttentionModal from "./components/modals/AddAttentionModal.tsx";
// import EditEducationalModal from "./components/modals/EditEducationalModal.tsx";
// import EditPoliceStationModal from "./components/modals/EditPoliceStationModal.tsx";
// import EditAttentionModal from "./components/modals/EditAttentionModal.tsx";
// import DeleteEducationalModal from "./components/modals/DeleteEducationalModal.tsx";
// import DeletePoliceStationModal from "./components/modals/DeletePoliceStationModal.tsx";
// import DeleteAttentionModal from "./components/modals/DeleteAttentionModal.tsx";

const AppContent: React.FC = () => {
    const location = useLocation();

    const [refresh, setRefresh] = useState<number>(0);
    const [currentId, setCurrentId] = useState<number>(0);

    const [currentNews, setCurrentNews] = useState(null);
    const [currentEducation, setCurrentEducation] = useState(null);
    const [currentPoliceStation, setCurrentPoliceStation] = useState(null);
    const [currentAttention, setCurrentAttention] = useState(null);

    // Define your modal state variables
    const [showAddNewsModal, setShowAddNewsModal] = useState(false);
    const [showAddEducationModal, setShowAddEducationModal] = useState(false);
    const [showAddPoliceStationModal, setShowAddPoliceStationModal] = useState(false);
    const [showAddAttentionModal, setShowAddAttentionModal] = useState(false);

    const [showEditNewsModal, setShowEditNewsModal] = useState(false);
    const [showEditEducationModal, setShowEditEducationModal] = useState(false);
    const [showEditPoliceStationModal, setShowEditPoliceStationModal] = useState(false);
    const [showEditAttentionModal, setShowEditAttentionModal] = useState(false);

    const [showDeleteNewsModal, setShowDeleteNewsModal] = useState(false);
    const [showDeleteEducationModal, setShowDeleteEducationModal] = useState(false);
    const [showDeletePoliceStationModal, setShowDeletePoliceStationModal] = useState(false);
    const [showDeleteAttentionModal, setShowDeleteAttentionModal] = useState(false);

    return (
        <div className={location.pathname !== "/" ? `wrapper` : `form__wrapper`}>
            {location.pathname !== "/" && <NavBar />}
            {location.pathname !== "/" ? (
                <div className="main__content">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="/admin/news"
                            element={
                                <News
                                    setShowEditModal={setShowEditNewsModal}
                                    setShowDeleteModal={setShowDeleteNewsModal}
                                    setShowAddModal={setShowAddNewsModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentNews}
                                />
                            }
                        />
                        <Route
                            path="/admin/educational"
                            element={
                                <EducationalContent
                                    setShowEditModal={setShowEditEducationModal}
                                    setShowDeleteModal={setShowDeleteEducationModal}
                                    setShowAddModal={setShowAddEducationModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentEducation}
                                />
                            }
                        />
                        <Route
                            path="/admin/police-stations"
                            element={
                                <PoliceStations
                                    setShowEditModal={setShowEditPoliceStationModal}
                                    setShowDeleteModal={setShowDeletePoliceStationModal}
                                    setShowAddModal={setShowAddPoliceStationModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentPoliceStation}
                                />
                            }
                        />
                        <Route
                            path="/admin/attentions"
                            element={
                                <Attentions
                                    setShowEditModal={setShowEditAttentionModal}
                                    setShowDeleteModal={setShowDeleteAttentionModal}
                                    setShowAddModal={setShowAddAttentionModal}
                                    setCurrentId={setCurrentId}
                                    refresh={refresh}
                                    setCurrentObject={setCurrentAttention}
                                />
                            }
                        />
                        <Route
                            path="/admin/chat"
                            element={
                                <Chat />
                            }
                        />
                    </Routes>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/admin/news"
                        element={
                            <News
                                setShowEditModal={setShowEditNewsModal}
                                setShowDeleteModal={setShowDeleteNewsModal}
                                setShowAddModal={setShowAddNewsModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentNews}
                            />
                        }
                    />
                    <Route
                        path="/admin/educational"
                        element={
                            <EducationalContent
                                setShowEditModal={setShowEditEducationModal}
                                setShowDeleteModal={setShowDeleteEducationModal}
                                setShowAddModal={setShowAddEducationModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentEducation}
                            />
                        }
                    />
                    <Route
                        path="/admin/police-stations"
                        element={
                            <PoliceStations
                                setShowEditModal={setShowEditPoliceStationModal}
                                setShowDeleteModal={setShowDeletePoliceStationModal}
                                setShowAddModal={setShowAddPoliceStationModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentPoliceStation}
                            />
                        }
                    />
                    <Route
                        path="/admin/attentions"
                        element={
                            <Attentions
                                setShowEditModal={setShowEditAttentionModal}
                                setShowDeleteModal={setShowDeleteAttentionModal}
                                setShowAddModal={setShowAddAttentionModal}
                                setCurrentId={setCurrentId}
                                refresh={refresh}
                                setCurrentObject={setCurrentAttention}
                            />
                        }
                    />
                    <Route
                        path="/admin/chat"
                        element={
                            <Chat />
                        }
                    />
                </Routes>
            )}
            {/* Modals */}
            <AddNewsModal showModal={showAddNewsModal} setShowModal={setShowAddNewsModal} setRefresh={setRefresh} refresh={refresh} />
            {/*<AddEducationalModal showModal={showAddEducationModal} setShowModal={setShowAddEducationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<AddPoliceStationModal showModal={showAddPoliceStationModal} setShowModal={setShowAddPoliceStationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<AddAttentionModal showModal={showAddAttentionModal} setShowModal={setShowAddAttentionModal} setRefresh={setRefresh} refresh={refresh} />*/}

            <EditNewsModal showModal={showEditNewsModal} id={currentId} data={currentNews} setShowModal={setShowEditNewsModal} setRefresh={setRefresh} refresh={refresh} />
            {/*<EditEducationalModal showModal={showEditEducationModal} id={currentId} data={currentEducation} setShowModal={setShowEditEducationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<EditPoliceStationModal showModal={showEditPoliceStationModal} id={currentId} data={currentPoliceStation} setShowModal={setShowEditPoliceStationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<EditAttentionModal showModal={showEditAttentionModal} id={currentId} data={currentAttention} setShowModal={setShowEditAttentionModal} setRefresh={setRefresh} refresh={refresh} />*/}

            <DeleteNewsModal showModal={showDeleteNewsModal} id={currentId} data={currentNews} setShowModal={setShowDeleteNewsModal} setRefresh={setRefresh} refresh={refresh} />
            {/*<DeleteEducationalModal showModal={showDeleteEducationModal} id={currentId} data={currentEducation} setShowModal={setShowDeleteEducationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<DeletePoliceStationModal showModal={showDeletePoliceStationModal} id={currentId} data={currentPoliceStation} setShowModal={setShowDeletePoliceStationModal} setRefresh={setRefresh} refresh={refresh} />*/}
            {/*<DeleteAttentionModal showModal={showDeleteAttentionModal} id={currentId} data={currentAttention} setShowModal={setShowDeleteAttentionModal} setRefresh={setRefresh} refresh={refresh} />*/}
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
