import React, {Component} from 'react'
import { useState } from 'react'
import '../assets/CSS/UpdateProfile.css'

class UpdateProfile extends Component{
    
    constructor(props) {
        super(props)

        this.state = {
            profileName: '',
            description:'',
            email: '',
            phone:'',
          
        }
    }
    handleClose = () =>{
        this.props.onClose();
    }

    handleProfileNameChange = (e) =>{
        this.setState({
            profileName: e.target.value
        })
    }

    handleDescriptionChange= (e) =>{
        this.setState({
            description: e.target.value
        })
    }

    handleEmailChange= e =>{
        this.setState({
            email : e.target.value
        })
    }

    handlePhoneChange = e =>{
        this.setState({
            phone : e.target.value
        })
    }


  render(){
    return (
    <div className='updateProfilePopup' >
        <div className='closeform'>
            <span class="material-symbols-outlined closeForm" onClick={this.handleClose}>
                close
            </span>
        </div>
        <h4 className='FormTopic'>Edit Profile Details</h4>
      <form className='profileForm'>
        <div className='divs'>
            <label> Profile Name</label><br></br>
            <input className="inputField" type="text" value={this.state.profileName} onChange={this.handleProfileNameChange} />
        </div>
        <div className='divs'>
            <label>Description</label><br></br>
            <textarea className="inputField" value ={this.state.description} onChange={this.handleDescriptionChange}></textarea>
        </div>
        <div className='divs'>
            <label>Email</label><br></br>
            <input className="inputField" type='email' value ={this.state.email} onChange={this.handleEmailChange}/>
        </div>
        <div className='divs'>
            <label>Phone Number</label><br></br>
            <input className="inputField" type='text' value ={this.state.phone} onChange={this.handlePhoneChange}/>
        </div>
       
      </form>
    </div>
  )
}
}

export default UpdateProfile
