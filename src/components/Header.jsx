import { ListItemButton, ListItemText, List, ListItem } from "@mui/material";

const Header = () => {
  const navLinks = [
    { title: "About", serialNumber: "01." },
    { title: "Experience", serialNumber: "02." },
    { title: "Projects", serialNumber: "03." },
    { title: "Contact", serialNumber: "04." },
  ];

  return (
    <header>
      <div>
        <a href="/">LOGO</a>
      </div>
      <nav style={{ display: "flex" }}>
        <List style={{ display: "flex" }}>
          <ListItem>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.serialNumber}
                LinkComponent="a"
                href={`#${link.title.toLowerCase()}`}
                sx={{ "&:hover": { color: "var(--yellow)" } }}
              >
                <ListItemText
                  primary={link.serialNumber}
                  sx={{ color: "var(--yellow)", marginRight: "5px" }}
                />
                <ListItemText primary={link.title} />
              </ListItemButton>
            ))}
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
