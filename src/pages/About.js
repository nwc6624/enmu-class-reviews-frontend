import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require('../assets/ENMU_Mascot_Logo_Cornered.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          marginBottom: '20px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            fontWeight: 'bold',
            color: '#2E3B55', 
            borderBottom: '3px solid #2E3B55',
            display: 'inline-block',
            paddingBottom: '10px',
            marginBottom: '20px',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          About ENMU Class Reviews
        </Typography>
        <Box
          sx={{
            textAlign: 'left',
            maxWidth: '1000px',
            margin: 'auto',
          }}
        >
          <Typography variant="body1" paragraph>
            Eastern New Mexico University (ENMU) is a public university with its main campus in Portales, New Mexico, and two additional campuses in Ruidoso and Roswell. Established in 1934, ENMU is the largest regional comprehensive university in New Mexico and serves a diverse student body as a federally designated Hispanic-serving institution.
          </Typography>
          <Typography variant="body1" paragraph>
            This platform allows students to share reviews and participate in discussions about their classes, helping to create a community-driven resource for current and future students of ENMU. By contributing to this site, students provide valuable insights that can aid others in making informed decisions about their educational paths. Whether you're looking to choose your next class or share your experiences, this platform is here to help.
          </Typography>
          <Typography variant="body1" paragraph>
            We encourage open and honest communication, but please be respectful in your comments and reviews. The goal is to foster a positive environment where all voices can be heard and respected. Thank you for being part of the ENMU community!
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Button variant="contained" color="success" href="https://www.enmu.edu/admission" sx={{ width: '100%' }}>
              Online
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs" sx={{ width: '100%' }}>
              Degree Programs
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs/undergraduate-degree" sx={{ width: '100%' }}>
              Undergraduate Degrees
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs/undergraduate-degree/bachelor" sx={{ width: '100%' }}>
              Bachelor Programs
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs/undergraduate-degree/bachelor/minors-and-endorsement-areas" sx={{ width: '100%' }}>
              Minors
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs/undergraduate-degree/bachelor/associate-degree-programs" sx={{ width: '100%' }}>
              Associates Programs
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/greyhound-life" sx={{ width: '100%' }}>
              Campus Life
            </Button>
            <Button variant="contained" color="success" href="https://goeasternathletics.com/" sx={{ width: '100%' }}>
              Athletics
            </Button>
            <Button variant="contained" color="success" href="https://www.enmu.edu/academics/degrees-programs/online-programs" sx={{ width: '100%' }}>
              Online/Remote Programs
            </Button>
          </Box>

          <Box sx={{ marginTop: '20px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21241.226768586564!2d-103.356679!3d34.1847064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ff5d4e4c79fd6d%3A0x66b6dc3de434a24a!2s1500%20S%20Avenue%20K%2C%20Portales%2C%20NM%2088130!5e0!3m2!1sen!2sus!4v1692115797614!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '10px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="ENMU Location"
            ></iframe>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ position: 'relative', width: '100%', marginBottom: '10px' }}>
              <img 
                src={require('../assets/Campus_Pics/Campus_3.png')} 
                alt="Arial shot of the campus" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '5px',
                  borderRadius: '0 0 10px 10px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                Arial shot of the campus
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Box sx={{ position: 'relative', width: '50%' }}>
                <img 
                  src={require('../assets/Campus_Pics/Campus_2.png')} 
                  alt="Greyhound Stadium" 
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '5px',
                    borderRadius: '0 0 10px 10px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  Greyhound Stadium
                </Box>
              </Box>
              <Box sx={{ position: 'relative', width: '50%' }}>
                <img 
                  src={require('../assets/Campus_Pics/Campus_1.png')} 
                  alt="Administration Building" 
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '5px',
                    borderRadius: '0 0 10px 10px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  Administration Building
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          marginTop: 'auto',
          marginBottom: '20px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="body2">
          The official unofficial review page for Eastern New Mexico University. Created by students, for students.
        </Typography>
        <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
          &copy; 2024
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          display: 'flex',
          gap: '20px',
        }}
      >
        <a href="https://www.enmu.edu/" target="_blank" rel="noopener noreferrer">
          <img 
            src={require('../assets/ENMUOldLogo.png')} 
            alt="ENMU Old Logo" 
            style={{ width: '40px', height: '40px' }} 
          />
        </a>
        <a href="https://www.instagram.com/enmu/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
        <a href="https://x.com/enmu" target="_blank" rel="noopener noreferrer">
          <TwitterIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
        <a href="https://www.facebook.com/goenmu/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ color: 'green', fontSize: '40px' }} />
        </a>
      </Box>
    </Box>
  );
};

export default About;
