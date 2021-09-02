import Modal from "./modal/modal";
import ModalBody from "./modal/modalBody";
import ModalHeader from "./modal/modalHeader";
import ModalFooter from "./modal/modalFooter";

export default function TestModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}