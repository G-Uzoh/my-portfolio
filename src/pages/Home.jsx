import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Home = () => {

    const Container = styled(Box)({
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '50px',
    });
    return (
        <Container>
            <Box sx={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Box color='#facf82' fontSize='clamp(var(--font-size-sm), 5vw, var(--font-size-md))'>
                        <Typography fontFamily='var(--font-mono)'>Hi, my name is</Typography>
                    </Box>
                    <Box color='var(--lightest-slate)' fontSize='clamp(34px, 8vw, 36px)'>
                        <h1>George Uzoh</h1>
                    </Box>
                        <h2>I build accessible web solutions</h2>
                    <Box color='#8892b0'>
                        <h3>I&apos;m a software developer with a focus on building accessible web products. Nice to meet you!</h3>
                    </Box>
                    <Box>
                        <Button variant='contained' sx={{px: '1.5rem', mt: '2rem'}}>View resume</Button>
                    </Box>
               </Box>
            </Box>
        </Container>
    );
}

export default Home;
