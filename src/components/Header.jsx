import { ListItemButton, List, ListItem, Typography } from "@mui/material";

const Header = () => {
  const navLinks = [
    { title: "About", serialNumber: "01." },
    { title: "Experience", serialNumber: "02." },
    { title: "Projects", serialNumber: "03." },
    { title: "Contact", serialNumber: "04." },
  ];

  return (
    <header>
      <nav>
        <div>
          <a href="/">LOGO</a>
        </div>
        <List style={{ display: "flex" }}>
          <ListItem sx={{fontFamily: "monospace", padding: "10px"}}>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.serialNumber}
                LinkComponent="a"
                href={`#${link.title.toLowerCase()}`}
                sx={{ "&:hover": { color: "var(--yellow)" }, fontSize: "var(--font-size-xs)" }}
              >
                <Typography sx={{ color: "var(--yellow)", marginRight: "4px", fontFamily: "var(--font-mono)", fontSize: "var(--font-size-xs)" }}>{link.serialNumber}</Typography>
                <Typography sx={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-xs)" }}>{link.title}</Typography>
              </ListItemButton>
            ))}
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
