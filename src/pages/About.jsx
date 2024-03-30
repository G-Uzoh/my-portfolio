import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import ugo from "../assets/ambassador.jpg";
import { Box } from "@mui/system";

// Should contain a brief description about yourself, image
const About = () => {
    
    return (
        <Box component="section" id="about" sx={{ padding: "100px 0" }}>
            <Typography component="h2" className="section-heading" sx={{ color: "var(--lightest-slate)", fontSize: "clamp(26px, 5vw, var(--font-size-heading))", fontWeight: "700", display: "flex", alignItems: "center", margin: "10px 0 40px", width: "100%" }}>About me</Typography>
            <Box component="div" sx={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "50px", width: "100%" }}>
                <Box>
                    <Box component="div">
                        <Typography component="p" margin="0 0 15px">Hi, my name is George, and I am a web developer based in Helsinki. I have collaborated on a few projects and completed several pet projects.</Typography>
                        <Typography component="p">When I am not busy writing code, I treat myself to a game of chess.</Typography>
                    </Box>
                    <Box component="ul" sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(140px, 200px))", gap: "0 10px", margin: "20px 0 0", overflow: "hidden", listStyle: "none" }}>
                        <Typography component="li">JavaScript</Typography>
                        <Typography component="li">TypeScript</Typography>
                        <Typography component="li">React</Typography>
                        <Typography component="li">Redux Toolkit</Typography>
                        <Typography component="li">Node.js</Typography>
                        <Typography component="li">AWS</Typography>
                    </Box>
                </Box>
                <Box>Image</Box>
            </Box>
        </Box>
        // <div style={{display: "flex", alignItems: "center"}}>
        // <div id="about" className="about">
        //     <h2 ref={aboutRef}>About me</h2>
        //     <p>
        //         Hi, welcome to my page. I am a web developer living in Finland. I have collaborated on a few projects and completed several pet projects. I typically build software solution using the MERN stack. When I am not busy writing code, I treat myself to a game of chess.
        //     </p>
        //     <Typography>I am currently working with these technologies:</Typography>
        //     <ul>
        //         <li>JavaScript</li>
        //         <li>TypeScript</li>
        //         <li>React</li>
        //         <li>Redux Toolkit</li>
        //         <li>Node.js</li>
        //         <li>AWS</li>
        //     </ul>
        // </div>
        // <Avatar src={ugo} sx={{width: '400px', height: '400px', marginTop: '6rem'}} />
        // </div>
    );
}

export default About;