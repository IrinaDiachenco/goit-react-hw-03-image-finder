import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

import s from "./Modal.module.css";



const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { src, alt } = this.props.image;
    return createPortal(
        <div className={s.overlay}  onClick={this.handleBackdropClick}>
        <div className={s.modal}>
            <img src={src} alt={alt}/>
          </div>
        </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object,
  toggleModal: PropTypes.func,
};