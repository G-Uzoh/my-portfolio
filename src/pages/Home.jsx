import image from '../assets/react.svg';
import { Avatar } from '@mui/material';

const Home = () => {
    return (
        <div className="front-page">
            <div className="intro-text">
                <h1>Hi, I am Awesome</h1>
                <h2>A web developer based in Helsinki, Finland</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis voluptatibus quia laudantium, ipsum cupiditate?</p>
                <button>Get in touch</button>
            </div>
            <div className="display-photo">
                <Avatar sx={{ width: 150, height: 150 }} src={image} alt='react logo' />
                
            </div>
        </div>
    );
}

export default Home;