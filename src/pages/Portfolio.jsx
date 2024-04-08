import { Box, Container } from "@mui/system"
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <Box component="div">
      <Header />
      <Container component='main' maxWidth='md'>
        <Home />
        <About />
        <Experience />
        <Projects />
      </Container>
    </Box>
  )
}

export default Portfolio;