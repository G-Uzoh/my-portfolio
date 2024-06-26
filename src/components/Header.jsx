import { ListItemButton, List, ListItem, Typography } from "@mui/material";
import logo from "../assets/logo.png"

const Header = () => {
  const navLinks = [
    { title: "About" },
    { title: "Experience" },
    { title: "Projects" },
    { title: "Contact" },
  ];

  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img src={logo} alt={"logo"} style={{width: "70px"}} />
          </a>
        </div>
        <List style={{ display: "flex" }}>
          <ListItem sx={{ fontFamily: "monospace", padding: "10px" }}>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.title}
                LinkComponent="a"
                href={`#${link.title.toLowerCase()}`}
                sx={{
                  "&:hover": { color: "var(--yellow)" },
                  fontSize: "var(--font-size-xs)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--font-size-xs)",
                  }}
                >
                  {link.title}
                </Typography>
              </ListItemButton>
            ))}
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
