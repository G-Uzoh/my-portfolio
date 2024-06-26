import { Box, Typography } from "@mui/material";

const Experience = () => {
    return (
        <Box component="section" id="experience" sx={{ padding: "10px 0 100px" }}>
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
                Experience
            </Typography>
            <Box>
          <Box component="div">
            <Typography component="p" fontSize="var(--font-size-lg)">
              Web Developer Intern, <Typography component="a" sx={{"&:hover": { color: "var(--yellow)" }}} href="https://www.kotafuz.com" target="_blank">Kotafuz</Typography>
            </Typography>
            <Typography component="p" fontFamily="var(--font-mono)" fontSize="var(--font-size-xxs)">
              April 2024 - Present
            </Typography>
          </Box>
          <Box
            component="ul"
            className="skillset"
            sx={{
              margin: "20px 0 0",
              overflow: "hidden",
              listStyle: "none",
            }}
          >
            <Typography component="li">Assist the development team to develop and maintain responsive, user-friendly and visually appealing web applications.</Typography>
            <Typography component="li">Perform quality assurance tests on sites to ensure cross-browser compatibility and mobile responsiveness.</Typography>
            <Typography component="li">Participate in agile scrum ceremonies (sprint planning, daily standup, sprint review and sprint retrospective).</Typography>
          </Box>
        </Box>
        </Box>
    )
}

export default Experience;