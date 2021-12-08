import React from "react";
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import UploadVideoForm from "../videos/upload_video_form";
import SideNavModal from "../home/side_nav_modal";

const Modal = ({modal, closeModal, openModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'upload':
      component = 
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <UploadVideoForm 
            closeModal={closeModal}
            openModal={openModal}  
          />;
        </div>

      break;
    case 'side-nav':
      component = 
        <div className="modal-child2" onClick={e => e.stopPropagation()}>
          <SideNavModal closeModal={closeModal}/>
        </div>
  
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' >
    {/* //   <div className="modal-child" onClick={e => e.stopPropagation()}> */}
    //     {component}
    {/* //   </div> */}
    // </div>
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