import React from "react";
import './ModalStyles.css';
import PropTypes from "prop-types";

class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
        return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>{this.props.title}</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
export default Modal;