// SearchBar.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import './SearchBar.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SearchBar = ({ onClose }) => {
  return (
    <Dialog
      open={true} // Set open to true to always display the search bar
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="search-bar-description"
      maxWidth="sm"
      fullWidth
      BackdropProps={{ style: { backgroundColor: 'transparent' } }} // Set the background color to transparent
      style={{ top: '20%', transform: 'translateY(-50%)', boxShadow: 'none' }}
    >
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button" onClick={() => console.log('Search')}>
          Search
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </Dialog>
  );
};

export default SearchBar;
