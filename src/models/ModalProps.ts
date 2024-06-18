interface ModalProps {
    title: string;
    children: React.ReactNode;
    show: boolean;
    onClose: () => void;
    bgColor?: string;
    borderColor?: string;
}

export default ModalProps;