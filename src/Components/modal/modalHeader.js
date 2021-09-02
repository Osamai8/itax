export default function ModalHeader(props) {
  console.log("modal header")
    return (
      <div className="modal-header">
        { props.children }
      </div>
    );
  }