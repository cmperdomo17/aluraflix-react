import React from "react";
import CloseButton from "../CloseButton/CloseButton";

interface ModalProps {
    children: React.ReactNode;
    show: boolean;
    onClose: () => void;
    bgColor?: string;
    borderColor?: string;
}

function Modal({ children, show, onClose, bgColor, borderColor }: ModalProps) {

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
            <div className="border-4 w-96 lg:w-1/2 min-h-100 p-5 rounded-lg shadow-lg" 
                style={{backgroundColor: bgColor, borderColor: borderColor}}>
                <div className="flex items-center justify-between mb-20 pb-2">
                    {children}
                    <CloseButton onClick={onClose} color="#fff" />
                </div>
            </div>
        </div>
    );
}

export default Modal;