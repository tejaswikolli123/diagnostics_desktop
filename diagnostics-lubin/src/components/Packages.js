import { Avatar, Box, Button, Card, CardActions, CardContent, IconButton,List, ListItem, Typography } from '@mui/material'
import React, { useRef } from 'react'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ReportIcon from '@mui/icons-material/Report';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import BiotechIcon from '@mui/icons-material/Biotech';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DownloadIcon from '@mui/icons-material/Download';

const Packages = () => {
    const scrollRef = useRef(null)

    const cards=[
        { title:'card1', 
        description1:'Glucose-6 Phosphate',
        description2:'Dehydrogenase(G6PD),',
        description3:"Quantative",
        rate:'₹790',
        detail1:'20 Test Parameter(s)',
        detail2:'Reports within 10 hours',
        detail3:'8 hours of fasting required'},
        { title:'card2', 
            description1:'Glucose-6 Phosphate',
            description2:'Dehydrogenase(G6PD),',
            description3:"Quantative",
            rate:'₹790',
            detail1:'20 Test Parameter(s)',
            detail2:'Reports within 10 hours',
            detail3:'8 hours of fasting required'},
            { title:'card3', 
                description1:'Glucose-6 Phosphate',
                description2:'Dehydrogenase(G6PD),',
                description3:"Quantative",
                rate:'₹790',
                detail1:'20 Test Parameter(s)',
                detail2:'Reports within 10 hours',
                detail3:'8 hours of fasting required'},
                { title:'card4', 
                    description1:'Glucose-6 Phosphate',
                    description2:'Dehydrogenase(G6PD),',
                    description3:"Quantative",
                    rate:'₹790',
                    detail1:'20 Test Parameter(s)',
                    detail2:'Reports within 10 hours',
                    detail3:'8 hours of fasting required'},
                    { title:'card5', 
                        description1:'Glucose-6 Phosphate',
                        description2:'Dehydrogenase(G6PD),',
                        description3:"Quantative",
                        rate:'₹790',
                        detail1:'20 Test Parameter(s)',
                        detail2:'Reports within 10 hours',
                        detail3:'8 hours of fasting required'},
    ]

    

    
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); 
    }
  };

  return (
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'left',paddingTop:'50px'}}>
        <Typography variant='h4' sx={{ fontSize: '30px', fontWeight: 'bold'}}>Popular Health Checkup Packages</Typography>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize',marginLeft:'350px'  }}>Compare Packages</Button>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize',marginLeft:'15px' }}>Create Your Package</Button>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize',marginLeft:'15px' }}>View All Package</Button>
        </Box>
      <Box sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding:'10px',
          width: '90%',
          '&::-webkit-scrollbar': {
            display: 'none', 
          },
        }}
        ref={scrollRef} 
      >
        {cards.map((card, index) => (
          <Card variant='outlined' key={index} sx={{ minWidth:300, maxWidth: 350,height:'350px', flexShrink: 0 }}>
            <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>{card.description1}</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>{card.description2}</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>{card.description3}</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>{card.rate}</Typography>
                        </CardContent>
                    </CardContent>
                    <CardContent>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} />{card.detail1}</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />{card.detail2}</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />{card.detail3}</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>
        
            
          </Card>
        ))}
      </Box>
      <Box sx={{width:'90%' , display:'flex',justifyContent:'center',alignItems:'center'}}>
      <IconButton onClick={scrollLeft} sx={{padding:'2',color:'white' }}>
            <Avatar variant='rounded' sx={{backgroundColor:'gray'}}><NavigateBefore sx={{fontSize:'25px'}}/></Avatar>
          
        </IconButton>
        <IconButton onClick={scrollRight} color="primary" sx={{padding:'2',color:'white' }}>
        <Avatar variant='rounded' sx={{backgroundColor:'gray'}}><NavigateNext sx={{fontSize:'25px'}}/></Avatar>
        </IconButton>
      </Box>
      <Box
  sx={{
    width: '100px', 
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: 2,
    position: 'absolute',
    right:'0',
    top: '140%',
    transform: 'translateY(-50%)',
  }}
>
  <List>

    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        mb: 2,
      }}
    >
      <BiotechIcon sx={{ color: '#4caf50', fontSize: '40px', mb: 1 }} /> {/* Icon */}
      <Button
        variant="text"
        sx={{
          color: '#7B1FA2', 
          textTransform: 'capitalize', 
          fontSize: '12px', 
          fontWeight: 500, 
        }}
      >
        Book a Test
      </Button>
    </ListItem>

    
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        mb: 2,
      }}
    >
      <HealthAndSafetyIcon sx={{ color: '#4caf50', fontSize: '40px', mb: 1 }} />
      <Button
        variant="text"
        sx={{
          color: '#7B1FA2', 
          textTransform: 'capitalize',
          fontSize: '12px',
          fontWeight: 500,
        }}
      >
        Health Packages
      </Button>
    </ListItem>

    
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
      }}
    >
      <DownloadIcon sx={{ color: '#4caf50', fontSize: '40px', mb: 1 }} />
      <Button
        variant="text"
        sx={{
          color: '#7B1FA2', 
          textTransform: 'capitalize',
          fontSize: '12px',
          fontWeight: 500,
        }}
      >
        Download Report
      </Button>
    </ListItem>
  </List>
</Box>
    </Box>
  )
}

export default Packages;
