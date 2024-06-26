import { Box, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import ugo from "../assets/ambassador.jpg";

const About = () => {
  return (
    <Box component="section" id="about" sx={{ padding: "10px 0 100px" }}>
      <Typography
        component="h2"
        className="section-heading"
        sx={{
          color: "var(--lightest-slate)",
          fontSize: "clamp(26px, 5vw, var(--font-size-heading))",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          margin: "10px 0 40px",
          width: "100%",
        }}
      >
        About me
      </Typography>
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "50px",
          width: "100%",
        }}
      >
        <Box>
          <Box component="div">
            <Typography component="p" margin="0 0 15px" fontSize="var(--font-size-lg)">
              Hi, my name is George, and I am a web developer based in Helsinki.
              I have collaborated on a few projects and completed several pet
              projects. I typically build software solutions using the MERN stack.
            </Typography>
            <Typography component="p" margin="0 0 15px" fontSize="var(--font-size-lg)">
              When I am not busy writing code, I treat myself to a game of
              chess.
            </Typography>
            <Typography component="p" fontSize="var(--font-size-lg)">
              I currently work with these technologies:
            </Typography>
          </Box>
          <Box
            component="ul"
            className="skillset"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
              margin: "20px 0 0",
              overflow: "hidden",
              listStyle: "none",
            }}
          >
            <Typography component="li">JavaScript</Typography>
            <Typography component="li">TypeScript</Typography>
            <Typography component="li">React</Typography>
            <Typography component="li">Redux Toolkit</Typography>
            <Typography component="li">Node.js</Typography>
            <Typography component="li">AWS</Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative", maxWidth: "300px" }}>
          <Avatar src={ugo} sx={{ width: "300px", height: "300px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
