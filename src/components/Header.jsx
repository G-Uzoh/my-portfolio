import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const navLinks = ['Home', 'About', 'Project', 'Contact'];

const Header = () => {
  return (
    <Container>
      <LeftWrapper>
        <Typography>Awesome</Typography>
      </LeftWrapper>
      <RightWrapper>
        {navLinks.map(link => {
            return (
            <Typography key={link} mx={2}>
                {link}
            </Typography>
            );
        })}
      </RightWrapper>
    </Container>
  );
};

export default Header;

const LeftWrapper = styled(Box)({
  color: "white",
});

const RightWrapper = styled(Box)({
    display: 'flex',
});

const Container = styled(Box)({
  backgroundColor: "#2d2d2d",
  padding: "10px",
  display: 'flex',
  justifyContent: 'space-between',
});
