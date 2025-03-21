export interface IPage {
    setShowAddModal: (value: boolean) => void;
    setShowEditModal: (value: boolean) => void;
    setShowDeleteModal: (value: boolean) => void;
    refresh: number;
    setCurrentId: (value: number) => void;
}