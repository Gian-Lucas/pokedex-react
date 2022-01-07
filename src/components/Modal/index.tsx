import { ReactNode, useEffect, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
  bg: string;
}

export const Modal = ({ isOpen, setIsOpen, bg, children }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, modalStatus]);

  return (
    <ReactModal
      isOpen={modalStatus}
      onRequestClose={setIsOpen}
      preventScroll={true}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          color: "#F0F0F5",
          background: bg,
          borderRadius: "8px",
          // height: "90%",
          width: `${window.innerWidth > 800 ? "65%" : "95%"}`,
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};
