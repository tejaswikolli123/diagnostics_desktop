import React, { useRef } from 'react';
import { Box, Card, CardContent, Typography, CardMedia, IconButton, Avatar, Button, Divider } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const  LatestArticles = () => {

    const scrollRef = useRef(null); 

    
    const cards = [
        { title: 'Card 1', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5XIIyTJqt36PEogADHZiO00e2nTVEsTjBA&s", 
            description: 'What are the Reasons for Increasing Cases for High Blood Pressure in Adults?',
            description1: 'Posted on:13th August,2024',
         },
        { title: 'Card 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxL73KyoddccYuWIBrnnblLAp0i_VP84hLow&s', 
          description: 'How Arthritis Blood Tests can Help Diagonse Your Condition?',
            description1: 'Posted on:13th August,2024', },
        { title: 'Card 3', 
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx8ey_pzFRTehrl4b6ly_Kc-_c0Y_XeQ9qQ&s', 
            description: 'What is the importance of the hemoglobin test and its range in overall health?',
            description1: 'Posted on:13th August,2024', },
        { title: 'Card 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy1_xxAtw02E5Z0W7MAYc47NaMM3A9tDREg&s', 
            description: 'Erythrocyte sediment Rate(ESR) Test:know inflammation levels',
            description1: 'Posted on:13th August,2024', },
      ];
  
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center' ,paddingTop:'20px'}}>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 2,alignItems:'center' }}>
      <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '30px', marginRight:'750px' }}>Latest Blogs & Articles</Typography>
        <IconButton onClick={scrollLeft} sx={{ padding: 2,color:'white' }}>
            <Avatar variant='rounded' sx={{backgroundColor:'gray'}}><NavigateBeforeIcon sx={{fontSize:'50px'}}/></Avatar>
          
        </IconButton>
        <IconButton onClick={scrollRight} color="primary" sx={{ padding: 2,color:'white' }}>
        <Avatar variant='rounded' sx={{backgroundColor:'gray'}}><NavigateNextIcon sx={{fontSize:'50px'}}/></Avatar>
        </IconButton>
        <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', fontSize: '15px',marginLeft:'10px',fontWeight:'500',width:'8%',height:"45px" }}>View All</Button>
      </Box>

      
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          padding:'2',
          width: '90%',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        ref={scrollRef}   
      >
        {cards.map((card, index) => (
          <Card variant='outlined' key={index} sx={{ minWidth: 300, maxWidth: 350,height:'450px', flexShrink: 0 }}>
            <CardMedia
              component="img"
              height="250"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6" color="textSecondary" sx={{fontSize:'25px',fontWeight:'500'}}>
                {card.description}
              </Typography>
              <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
             
              <Typography  variant='h6' sx={{fontSize:'15px',padding:'12px 0'}}>{card.description1}</Typography>
              
            
            </CardContent>
            
          </Card>
        ))}
      </Box>
      

    </Box>
  )
}

export default LatestArticles;
