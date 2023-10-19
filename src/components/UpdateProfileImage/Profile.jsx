import React,{useState} from 'react'
import '../../assets/CSS/profile.css'
// import { InputText } from 'primereact/inputtext';
// import { Dialog } from 'primereact/dialog';
import profile from '../../assets/avatar.jpg';
import Modal from 'react-modal';
import Avatar from 'react-avatar-edit'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border:"0",
     
    },
  };


const ProfileImg = () => {
    const[im,setim] = useState(null);
    const[pim,setpim] = useState(null);
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const onCrop = (i) => {
        console.log(i);
        setim(i);
        setpim(i);
    }
    
    const onClose = () => {
        closeModal();
        setpim(null);
    }

  return (
    <div className='profile-pic'>
        <div className='avatar' onClick={openModal}>
            <img  src={im ? im:profile}/>
        
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                
                <Avatar
                    width={390}
                    height={295}
                    onCrop={onCrop}
                    onClose={onClose}
                />
                
            </Modal>
        </div>
        <div className='pr'>
            {pim && <img src={pim}/>}
        </div>

    </div>
  )
}

export default ProfileImg;
