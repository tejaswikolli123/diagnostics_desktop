import React from 'react';
import { Box,Grid, Typography, TextField, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BiotechIcon from '@mui/icons-material/Biotech';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import DownloadIcon from '@mui/icons-material/Download'; 
import SmsIcon from '@mui/icons-material/Sms';

const Appointment = () => {
  return (
    <Box>
      {/* Top Navigation Section */}
      <Box
        sx={{
          backgroundColor: '#f3e5f5',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        {[
          'Book an appointment',
          'Blood Tests & Packages',
          'For Doctors',
          'Partner with us',
          'Blogs',
          'About us',
          'Contact us',
        ].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <Typography
              variant="h6"
              color="secondary"
              sx={{ fontSize: '15px', fontWeight: 'bold' }}
            >
              {text}
            </Typography>
            {text !== 'Blogs' && <KeyboardArrowDownIcon color="secondary" />}
          </Box>
        ))}
      </Box>

      {/* Main Section */}
      <Box sx={{ marginTop: '20px', display: 'flex', marginLeft: '75px' }}>
        <img
          height="350"
          width="60%"
          alt="Banner"
          src="https://lupindiagnostics.com//storage/home-page-banners/August2024/Baiq3UgMOHWGxRcwz60B.jpg"
        />
        <Box
          sx={{
            marginLeft: '1rem',
            boxShadow: '#cfcfcf 2px 2px 5px',
            border: '1px #fefefe solid',
            borderRadius: '0px 0px 8px 8px',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#6C4675',
              padding: '1.5rem',
              textAlign: 'center',
              borderRadius: '8px 8px 0 0',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h6" color="white">
              Book a Free Home Collection!
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <TextField label="Enter your full name" size="small" />
            <TextField label="Enter your contact number" size="small" />
          </Box>
          <Box sx={{ paddingLeft: '1rem', paddingBottom: '1rem' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#2CCE6C',
                borderColor: '#2CCE6C',
                textTransform: 'capitalize',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '75px',
          backgroundColor: '#6C4675',
          color: 'white',
          marginTop: '25px',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
        {/* Book a Test */}
        <Grid item xs={4} textAlign="center">
          <BiotechIcon fontSize="large" />
          <Typography variant="body1">Book a Test</Typography>
        </Grid>

        {/* Health Packages */}
        <Grid item xs={4} textAlign="center">
          <HealthAndSafetyIcon fontSize="large" />
          <Typography variant="body1">Health Packages</Typography>
        </Grid>

        {/* Download Report */}
        <Grid item xs={4} textAlign="center">
          <DownloadIcon fontSize="large" />
          <Typography variant="body1">Download Report</Typography>
        </Grid>
      </Grid>
      </Box>
      

      {/* Chat Button */}
      <Box>
      <Button
        variant="contained"
        startIcon={<SmsIcon />}
        sx={{
          textTransform: 'capitalize',
          backgroundColor: '#2CCE6C',
          position: 'fixed',
          zIndex: 999,
          bottom: '100px',
          right: '125px',
        }}
      >
        Chat with us
      </Button>
      </Box>
    </Box>
  );
};

export default Appointment;
