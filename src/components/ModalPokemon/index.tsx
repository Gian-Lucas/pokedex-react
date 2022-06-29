import Modal from "react-modal";

Modal.setAppElement("#root");

interface ModalPokemonProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  imgSrc: string;
  bg: string;
}

export function ModalPokemon({
  modalIsOpen,
  closeModal,
  imgSrc,
  bg,
}: ModalPokemonProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: `${bg}99`,
        },
        content: {
          backgroundColor: bg,
          border: "none",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel="Modal Image"
    >
      <img src={imgSrc} alt="pokemon" style={{ maxWidth: "90vw" }} />
    </Modal>
  );
}
