import React from "react";
import CloseButton from "../CloseButton/CloseButton";

interface ModalProps {
    children: React.ReactNode;
    show: boolean;
    onClose: () => void;
}

function Modal({ children, show, onClose }: ModalProps) {

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-1/2 min-h-100 p-5 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-20 pb-2 border-b-2 border-dark">
                    {children}
                    <CloseButton onClick={onClose} />
                </div>
            </div>
        </div>
    );
}

export default Modal;