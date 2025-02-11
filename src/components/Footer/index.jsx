import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
    return (
        <Box sx={{ py:'1.5rem' , backgroundColor:'grey.900'}}>
            <Box sx={{ maxWidth: '500px', mx: 'auto', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <Accordion sx={{ backgroundColor: 'grey.800', boxShadow:'none' }} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontFamily={'gandom'} component="span" color="white">کارفرمایان</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="white" fontFamily={'gandom'}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: 'grey.800' , boxShadow:'none' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography fontFamily={'gandom'} component="span" color="white">درباره ما</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Footer;
