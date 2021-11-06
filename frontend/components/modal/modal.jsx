import React from "react";
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import UploadVideoForm from "../videos/upload_video_form";

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'upload':
      component = <UploadVideoForm closeModal={closeModal}/>;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
};

const mSTP = state => ({
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);