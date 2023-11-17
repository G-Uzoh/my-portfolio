import { Avatar } from '@mui/material';
import george from '../assets/george.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="intro-text">
                <h1>Hi, I am Awesome</h1>
                <h2>A web developer based in Helsinki, Finland</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis voluptatibus quia laudantium, ipsum cupiditate?</p>
                <button>Get in touch</button>
            </div>
            <div className="display-photo">
                <Avatar sx={{ width: 150, height: 150 }} src={george} alt='photo of george' />
                
            </div>
        </div>
    );
}

export default Home;