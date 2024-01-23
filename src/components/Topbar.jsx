import React, { useState } from 'react';
import { Box, IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import { makeStyles } from '@mui/system';


// const useStyles = makeStyles((theme) => ({
//     customDialog: {
//       backgroundColor: '#333', // Dark background color
//       color: 'white', // Text color
//     },
//   }));
const Topbar = () => {

  
//   const classes = useStyles();    
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setNotificationOpen(true);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Box display="flex">
        <IconButton onClick={handleNotificationClick}>
          <NotificationsActiveOutlinedIcon style={{ color: '#f2f0f0' }} />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon style={{ color: '#f2f0f0' }} />
        </IconButton>
      </Box>

      <Dialog open={isNotificationOpen} onClose={handleNotificationClose}>
        <DialogTitle>Notifications</DialogTitle>
        <DialogContent>
          <List>
            <ListItem button>
              <ListItemText primary="Notification 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Notification 2" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Topbar;
