import Header from "../components/Header";
import Home from "./Home";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default Portfolio;

const Container = styled(Box)({
  // backgroundColor: 'red',
  height: '80px',
  margin: 'none',
  padding: 'none',
  width: '100vw',
});