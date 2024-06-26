const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer>
            <small style={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-xxs)", display: "flex", justifyContent: "center" }}>
                © {date} George Uzoh. Design inspiration from <a href="https://v4.brittanychiang.com/" target="_blank" style={{ marginLeft: "5px" }}>brittanychiang.com</a>.
            </small>
        </footer>
    );
}

export default Footer;