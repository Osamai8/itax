export default function ModalFooter(props) {
  console.log("fooyter",props)
    return (
      <div className="modal-footer">
        { props.children }
      </div>
    );
  }