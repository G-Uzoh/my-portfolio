import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import ugo from "../assets/ambassador.jpg";

// Should contain a brief description about yourself, image
const About = () => {
    return (
        <>
        <div className="about">
            <h2>About me</h2>
            <p>
                Hi, welcome to my page. I am a web developer living in Finland. I have collaborated on a few projects and completed several pet projects. I typically build software solution using the MERN stack. When I am not busy writing code, I treat myself to a game of chess.
            </p>
            <Typography>I am currently working with these technologies:</Typography>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Node.js</li>
                <li>AWS</li>
            </ul>
        </div>
        <Avatar src={ugo} sx={{width: '400px', height: '400px', marginTop: '6rem'}} />
        </>
    );
}

export default About;