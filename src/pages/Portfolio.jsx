import Header from "../components/Header";
import Home from "./Home";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Container>
  );
}

export default Portfolio;

const Container = styled(Box)({
  height: '80px',
  margin: 'none',
  padding: 'none',
  width: '100vw',
});