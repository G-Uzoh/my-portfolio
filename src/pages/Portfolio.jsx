import { Box, Container } from "@mui/system"
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";

const Portfolio = () => {
  return (
    <Box component="div">
      <Header />
      <Container component='main' maxWidth='md'>
        <Home />
        <About />
      </Container>
    </Box>
  )
}

export default Portfolio;