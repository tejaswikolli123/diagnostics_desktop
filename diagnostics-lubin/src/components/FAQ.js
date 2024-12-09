import React from 'react';
import { Box, Typography, Stack, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <div>
      {/* FAQs Section */}
      <Box sx={{ backgroundColor: '#FDF4FE', width: '100%', padding: '50px' }}>
        <Box>
          <Typography variant="h5" sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'sans-serif' }}>
            FAQs
          </Typography>
          <Box sx={{ padding: '50px 0' }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{ backgroundColor: '#6C4675', textTransform: 'capitalize' }}>
                Topic 1
              </Button>
              <Button variant="outlined" sx={{ color: '#6C4675', borderColor: '#6C4675', textTransform: 'capitalize' }}>
                Topic 2
              </Button>
              <Button variant="outlined" sx={{ color: '#6C4675', borderColor: '#6C4675', textTransform: 'capitalize' }}>
                Topic 3
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ paddingLeft: '50px' }}>
          {/* FAQ 1 */}
          <Accordion sx={{ width: '90%', padding: 2 }}>
            <AccordionSummary
              sx={{ color: '#6C4675', fontWeight: '400' }}
              expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
            >
              How do I directly get connected with customer connect?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: '12px', lineHeight: '20px' }}>
              For additional information, you can connect with us on our LupiConnect number **7070300400**. You can also visit<br />
              our website{' '}
              <a href="https://www.lupindiagnostics.com" style={{ color: '#6C4675' }}>
                www.lupindiagnostics.com
              </a>{' '}
              for more details.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 2 */}
          <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
            <AccordionSummary
              sx={{ fontSize: '15px' }}
              expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
            >
              What all services do we offer?
            </AccordionSummary>
            
          </Accordion>

          {/* FAQ 3 */}
          <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
            <AccordionSummary
              sx={{ fontSize: '15px' }}
              expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
            >
              When will I get my report? And how will I come to know that my report is ready?
            </AccordionSummary>
           
          </Accordion>

          {/* FAQ 4 */}
          <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
            <AccordionSummary
              sx={{ fontSize: '15px' }}
              expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
            >
              Can I add my family members on my registered mobile number for availing diagnostic services?
            </AccordionSummary>
            
          </Accordion>
        </Box>
      </Box>
      </div>

  );
};

export default FAQ;
