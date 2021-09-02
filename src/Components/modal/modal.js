export default function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          { props.children }
        </div>
      </div>
    </div>
  );
}