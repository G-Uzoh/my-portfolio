import { Box, Container } from "@mui/system"
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Container maxWidth='md'>
        <Home />
        <About />
      </Container>
    </div>
  )
}

export default Portfolio;