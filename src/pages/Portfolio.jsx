import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </Container>
    // <MyComponent>Styled div</MyComponent>
  );
}

export default Portfolio;

const Container = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
});

// const MyComponent = styled('div')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
//   width: '100vw'
// });