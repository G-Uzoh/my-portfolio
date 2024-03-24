import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Header = () => {
  const navLinks = [
    { title: 'About', serialNumber: '01.'},
    { title: 'Experience', serialNumber: '02.'},
    { title: 'Projects', serialNumber: '03.'},
    { title: 'Contact', serialNumber: '04.'},
  ];
  
  const LeftWrapper = styled(Box)({
    color: "var(--yellow)",
  });
  
  const RightWrapper = styled(Box)({
      display: 'flex',
  });
  
  const Container = styled(Box)({
    backgroundColor: 'rgba(10, 25, 47, 0.85)',
    padding: "0 50px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'var(--nav-height)',
    position: 'fixed',
    top: '0',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    transition: 'var(--transition)',
  });

  return (
    <Container>
     <Box display='flex' justifyContent='space-between' alignItems='center' height='100px' width='100%'>
        <LeftWrapper>
          <Typography>LOGO</Typography>
        </LeftWrapper>
        <RightWrapper>
          {navLinks.map(link => {
              return (
              <Button variant="text" sx={{textTransform: 'capitalize', "&:hover": {
                  color: 'var(--yellow)'
              }}}
               key={link.serialNumber} mr='2rem'>
                  <Typography sx={{color: 'var(--yellow)', marginRight: '0.875rem'}}>{link.serialNumber}</Typography>
                  <Typography>{link.title}</Typography>
              </Button>
              );
          })}
        </RightWrapper>
     </Box>
    </Container>
  );
};

export default Header;
