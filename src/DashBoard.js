import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 export default function Dashboard() {
  const nav=useNavigate()

  return (

    <div style={{ padding: '2px', margin: '1px' }}>
           <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
          
     
        <Button  color="inherit" onClick={()=>nav('/login')}>Login</Button>
          
          
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
      
        
    <Button  size="small" onClick={()=>nav('/contactus')}>Contact Us
</Button>
  
        </CardActions>
      </Card>
      <br />
      <Grid container spacing={2}>
        <Grid item>
       
        
        
          <Button   variant="contained" onClick={()=>nav('/adminlogin')}>
Admin Login
</Button>


        </Grid>
        <Grid item>

        <Button   variant="contained" onClick={()=>nav('/studentlogin')}>
      
Student Login

</Button>


        </Grid>
      </Grid>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular JS</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

