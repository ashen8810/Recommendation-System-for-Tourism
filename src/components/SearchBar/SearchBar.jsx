// SearchBar.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './SearchBar.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SearchBar = ({ onClose }) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="search-bar-description"
      maxWidth="sm"
      fullWidth
      BackdropProps={{ style: { backgroundColor: 'transparent'} }}
      style={{
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        maxWidth: 'calc(100% - 64px)',
      }}
    >
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <IconButton className="search-button" onClick={() => console.log('Search')}>
          <SearchIcon />
        </IconButton>
        <IconButton className="close-button" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default SearchBar;
