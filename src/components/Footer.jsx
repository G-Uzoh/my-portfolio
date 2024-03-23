const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer>
            <small>
                © {date} George Uzoh
            </small>
        </footer>
    );
}

export default Footer;