import CloseButton from "../CloseButton/CloseButton";
import ModalProps from "../../models/ModalProps";

function Modal({ title, children, show, onClose, bgColor, borderColor }: ModalProps) {

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
            <div className="border-1 w-96 lg:w-1/3 min-h-100 p-5 rounded-lg shadow-2xl shadow-gray-500" 
                style={{backgroundColor: bgColor, borderColor: borderColor}}>
                <div className="flex justify-between px-2 pb-6 gap-36">
                    <h1 className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold font-Onest">
                        {title}
                    </h1>
                    <CloseButton onClick={onClose} color="#fff" />
                </div>
                <div className="flex justify-center px-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;