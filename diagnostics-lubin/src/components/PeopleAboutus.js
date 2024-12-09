import { Avatar, Box, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React, { useRef } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const PeopleAboutus = () => {
    const scrollRef = useRef(null);

    const cards = [
        { title: 'Card 1', image:'https://mui.com/static/images/avatar/5.jpg' , 
            description: 'I had very noticeable good experience with you and your service.Presently there is lot of skepticism in India for diagonstic tests.In my opinion,Lupin Diagonstic will create remarkable positive opinion for diagonstic field in India',
            
         },
         { title: 'Card 2', image:'https://mui.com/static/images/avatar/5.jpg', 
            description: 'I had very noticeable good experience with you and your service.Presently there is lot of skepticism in India for diagonstic tests.In my opinion,Lupin Diagonstic will create remarkable positive opinion for diagonstic field in India',
            
         },
         { title: 'Card 3', image:'https://mui.com//static/images/avatar/2.jpg', 
            description: 'I had very noticeable good experience with you and your service.Presently there is lot of skepticism in India for diagonstic tests.In my opinion,Lupin Diagonstic will create remarkable positive opinion for diagonstic field in India',
            
         },
         
        
      ];
    

      const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' }); 
        }
    };

    
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
    };
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
            <Box sx={{ width: '30%', display: 'flex',paddingLeft:'50px',justifyContent:'center' }}>
                <Card sx={{ maxWidth:450,minWidth:400,boxShadow:'none',backgroundColor:'#E7FBF8'}}>
                    <CardContent sx={{padding:'50px',height:'200px'}}>
                    <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
                        What People Say
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
                        About us
                    </Typography>
                    </CardContent>
                    <CardContent sx={{padding:'30px',}}>
                    <IconButton onClick={scrollLeft} sx={{ padding: 2, color: 'white' }}>
                        <Avatar variant='rounded' sx={{ backgroundColor: 'gray' }}><NavigateBeforeIcon sx={{ fontSize: '50px' }} /></Avatar>

                    </IconButton>
                    <IconButton onClick={scrollRight} color="primary" sx={{ padding: 2, color: 'white' }}>
                        <Avatar variant='rounded' sx={{ backgroundColor: 'gray' }}><NavigateNextIcon sx={{ fontSize: '50px' }} /></Avatar>
                    </IconButton>
                    </CardContent>
                    
                </Card>

            </Box>
            <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 2,
                padding:'2',
                width: '60%',
                '&::-webkit-scrollbar': {
                  display: 'none', 
                },
              }}
              ref={scrollRef} 
              >      
                {cards.map((card, index) => (
          <Card variant='outlined' key={index} sx={{ minWidth:400, maxWidth: 440,height:'425px', flexShrink: 0 }}>
            
            <CardContent>
              <Typography variant="body1" color="textSecondary" sx={{fontSize:'20px',fontWeight:'500',lineHeight:'40px',textAlign:'justify'}}>
                {card.description}
              </Typography>
              
             
              <Box sx={{ p:2 }}>
              <Divider sx={{ border: '1px solid #2CCE6C' }} />
                            <CardHeader 
                                avatar={
                                    <Avatar
                                        alt=''
                                        src={card.image}
                                        sx={{ width:75, height: 75 }}>
                                    </Avatar>
                                }
                                title="Dr.Vijay Somani"
                                subheader="Pune"
                            />
                        </Box>
              
            
            </CardContent>
            
          </Card>
        ))}
            </Box>
        </Box>
    )
}

export default PeopleAboutus;
