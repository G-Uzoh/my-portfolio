import { Box, Typography, Button } from '@mui/material';

const Home = () => {
    return (
        <Box component="section" className="hero">
            <Typography variant="subtitle2" component="h1" color="var(--yellow)" fontFamily="var(--font-mono)" margin="0 0 30px 4px">Hi, my name is</Typography>
            <Typography variant="h1" component="h2" color="var(--lightest-slate)" fontSize="clamp(40px, 8vw, 80px)" fontWeight="700">George Uzoh</Typography>
            <Typography variant="h2" component="h3" color="var(--slate)" fontSize="clamp(40px, 8vw, 80px)" fontWeight="500" margin="15px 0 0 0" lineHeight="0.9">I build accessible web solutions</Typography>
        </Box>
        // <Container>
        //     <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        //        <Box display='flex' flexDirection='column' justifyContent='center'>
        //             <Box color='#facf82' fontSize='clamp(var(--font-size-sm), 5vw, var(--font-size-md))'>
        //                 <Typography fontFamily='var(--font-mono)'>Hi, my name is</Typography>
        //             </Box>
        //             <Box color='var(--lightest-slate)' fontSize='clamp(34px, 8vw, 36px)'>
        //                 <h1>George Uzoh</h1>
        //             </Box>
        //                 <h2>I build accessible web solutions</h2>
        //             <Box color='#8892b0'>
        //                 <h3>I&apos;m a software developer with a focus on building accessible web products. Nice to meet you!</h3>
        //             </Box>
        //             <Box>
        //                 <Button variant='contained' sx={{px: '1.5rem', mt: '2rem'}}>View resume</Button>
        //             </Box>
        //        </Box>
        //     </Box>
        // </Container>
    );
}

export default Home;
