import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const Contact = () => {
  const MailLink = styled(Box)({
    color: "var(--yellow)",
    background: "transparent",
    border: "1px solid var(--yellow)",
    borderRadius: "var(--border-radius)",
    padding: "1.25rem 1.75rem",
    fontSize: "var(--font-size-sm)",
    fontFamily: "var(--font-mono)",
    lineHeight: "1",
    textDecoration: "none",
    cursor: "pointer",
  });

  return (
    <Box id="contact" sx={{ padding: "10px 0 100px" }}>
      <Typography
        component="h2"
        className="section-heading"
        sx={{
          color: "var(--lightest-slate)",
          fontSize: "clamp(26px, 5vw, var(--font-size-heading))",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          margin: "10px 0 40px",
          width: "100%",
        }}
      >
        Contact me
      </Typography>
      <Typography>Feel free to reach out if you have any inquiries.</Typography>
      <Box sx={{ marginTop: "50px" }}>
        <MailLink
          component="a"
          href="mailto:ugochukwuuzoh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </MailLink>
      </Box>
    </Box>
  );
};

export default Contact;
