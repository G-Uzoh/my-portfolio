import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const ResumeLink = styled(Box)({
    color: "var(--yellow)",
    background: "transparent",
    border: "1px solid var(--yellow)",
    borderRadius: "var(--border-radius)",
    padding: "1.25rem 1.75rem",
    fontSize: "var(--font-size-sm)",
    fontFamily: "var(--font-mono)",
    lineHeight: "1",
    textDecoration: "none",
    cursor: "pointer",
    marginTop: "50px",
  });

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
      <ResumeLink component="a">View my resume</ResumeLink>
    </Box>
  );
};

export default Home;
