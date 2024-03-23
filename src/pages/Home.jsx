import { Avatar } from '@mui/material';
import ugo from '../assets/ambassador.jpg';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Home = () => {
    return (
        <Container>
            <Box sx={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem'}}>
               <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Box color='#facf82' fontFamily='var(--font-mono)'>
                        <h4>Hi, my name is</h4>
                    </Box>
                    <Box color='#ccd6f6'>
                        <h1>Ugochukwu George Uzoh</h1>
                    </Box>
                    <Box color='#8892b0'>
                        <h2>A web developer based in Helsinki, Finland</h2>
                        <Typography>I&apos;m a software developer with a focus on building accessible web products. Nice to meet you!</Typography>
                    </Box>
                    <Box>
                        <Button variant='contained' sx={{px: '2rem', mt: '2rem'}}>Get in touch</Button>
                    </Box>
               </Box>
            </Box>
            {/* <Box sx={{borderRadius: '100%', width: '150px', height: '150px'}}> */}
                {/* <Avatar src={ugo} sx={{width: '400px', height: '400px', marginTop: '6rem'}} /> */}
                {/* <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={ugo} alt='photo of george' /> */}
            {/* </Box> */}
        </Container>
    );
}

export default Home;

const Container = styled(Box)({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
});