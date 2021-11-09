import React from "react";
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import UploadVideoForm from "../videos/upload_video_form";
// import UploadVideoTitle from "../videos/upload_video_title";

const Modal = ({modal, closeModal, openModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'upload':
      component = <UploadVideoForm 
                    closeModal={closeModal}
                    openModal={openModal}  
                  />;
      break;
    // case 'title':
    //   // // // debugger
    //   component = <UploadVideoTitle closeModal={closeModal}/>
    default:
      return null;
  }

  return (
    <div className='modal-background' >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
        {/* <UploadVideoTitle closeModal={closeModal} /> */}
      </div>
    </div>
  )
};

const mSTP = state => ({
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Modal);