export interface IModal {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    refresh: number;
    setRefresh: (value: number) => void;
}