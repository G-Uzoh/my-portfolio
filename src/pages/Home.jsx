import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Home = () => {

  return (
    <Box component="section" className="hero">
      <Typography
        variant="subtitle2"
        component="h1"
        color="var(--yellow)"
        fontFamily="var(--font-mono)"
        margin="0 0 30px 4px"
      >
        Hi, my name is
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        color="var(--lightest-slate)"
        fontSize="clamp(40px, 8vw, 80px)"
        fontWeight="700"
      >
        George Uzoh
      </Typography>
      <Typography
        variant="h2"
        component="h3"
        color="var(--slate)"
        fontSize="clamp(40px, 8vw, 80px)"
        fontWeight="500"
        margin="15px 0 0 0"
        lineHeight="0.9"
      >
        I build accessible web solutions
      </Typography>
      <Typography component="p" sx={{ margin: "20px 0 0", maxWidth: "540px" }}>
        I&apos;m a software developer with a focus on building accessible web
        products. Welcome to my page.
      </Typography>
    </Box>
  );
};

export default Home;
