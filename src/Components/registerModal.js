import React  from 'react'
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        onClick={this.props.onClose}
      >
        <div
          style={{
            padding: 20,
            top: '-25%',
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '200px',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
        >
          Please Choose
          <hr />
          {this.props.children}
          <div style={{marginTop:'70px',float:'right'}}>
          <button style={{marginRight:'20px'}}  onClick={this.props.accept}>Yes</button>
          <button onClick={this.props.onClose}> No </button>
          </div>
        </div>
      </div>,
      modalRoot,
    )
  }
}