import React from 'react';
import { Badge, Box, Button,InputAdornment, TextField, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {

  return (
    <Box>
      {/* Contact Section */}
      <Box
        sx={{backgroundColor: '#99e4ee',display: 'flex',justifyContent: 'center',alignItems: 'center', gap: 2, padding: 2, }}
      >
        <PhoneIcon sx={{ color: '#357a38', fontSize: 25 }} />
        <Typography variant="h6" color="#357a38">
          7030 300 400
        </Typography>
        <Typography variant="h6" color="#357a38">
          Or
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: '#357a38',
            borderColor: '#357a38',
            ':hover': { borderColor: '#357a38' },
          }}
        >
          Get a Callback
        </Button>
      </Box>

      {/* Main Header */}
      <Box sx={{background:'white', display: 'flex', flexDirection: 'row', marginLeft: '50px', justifyContent: 'space-evenly',width:'100%' }}>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:"5px"}}>
            
        <img style={{ height: '140px' }}
          src='data:image/png;base64,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' />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
  <LocationOnIcon />
  <Typography variant="h6">Mumbai</Typography>
  <KeyboardArrowDownIcon />
</Box>

<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
  <TextField
    placeholder="Search tests/packages"
    size="small"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon sx={{ color: 'gray', marginRight: '4px' }}/>
        </InputAdornment>
      ),
    }}
 />
</Box>

<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
  <LocationCityIcon />
  <Typography variant="h6">Center Locator</Typography>
</Box>

<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
  <Badge  color="primary">
    <ShoppingCartIcon />
  </Badge>
  <Typography variant="h6">Cart</Typography>
</Box>

<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px' }}
>
  <Button
    variant="contained"
    startIcon={<PersonIcon />}
    sx={{ backgroundColor: '#2CCE6C' }}
  >
    Customer Login
  </Button>
  </Box>
 </Box>
</Box>

  );
};

export default Header;
