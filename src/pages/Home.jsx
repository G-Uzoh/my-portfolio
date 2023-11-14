import image from '../assets/react.svg';

const Home = () => {
    return (
        <>
            <h1>Hi, I am Awesome</h1>
            <h2>A web developer based in Helsinki, Finland</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis voluptatibus quia laudantium, ipsum cupiditate?</p>
            <button>Get in touch</button>
            <img src={image} alt='react logo' />
        </>
    );
}

export default Home;