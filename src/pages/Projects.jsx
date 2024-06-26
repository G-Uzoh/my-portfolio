import { Box, Typography, styled } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const ProjectWrapper = styled(Box)({
    background: "var(--light-navy)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "2rem 1.75rem",
    overflow: "auto",
    borderRadius: "var(--border-radius)",
  });

  return (
    <Box component="section" id="projects" sx={{ padding: "10px 0 100px" }}>
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
        Projects
      </Typography>
      <Box component="ul" sx={{ width: "100%", listStyle: "none" }}>
        <Box component="li" sx={{ marginBottom: "15px" }}>
          <ProjectWrapper>
            <Box className="links" sx={{ width: "100%" }}>
              <Box sx={{ textAlign: "right" }}>
                <Box
                  component="a"
                  rel="noopener noreferrer"
                  href="https://github.com/G-Uzoh/air-quality"
                  target="_blank"
                >
                  <GitHubIcon
                    sx={{
                      "&:hover": { color: "var(--yellow)" },
                      fontSize: "var(--font-size-xl)",
                      marginRight: "15px",
                      color: "var(--slate)",
                    }}
                  />
                </Box>
                <Box
                  component="a"
                  rel="noopener noreferrer"
                  href="https://airspy.netlify.app/"
                  target="_blank"
                >
                  <OpenInNewIcon
                    sx={{
                      "&:hover": { color: "var(--yellow)" },
                      fontSize: "var(--font-size-xl)",
                      color: "var(--slate)",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ color: "var(--lightest-slate)" }}>
                <Typography
                  sx={{ fontSize: "var(--font-size-lg)", fontWeight: "700" }}
                >
                  AirSpy
                </Typography>
              </Box>
              <Box
                sx={{
                  color: "var(--light-slate)",
                  margin: "20px 0",
                }}
              >
                <Typography sx={{ fontSize: "var(--font-size-sm)" }}>
                  A web application that displays information about the
                  outdoor air quality of any geographical location.
                </Typography>
              </Box>
            </Box>
            <Box
              component="ul"
              className="tech-list"
              sx={{
                listStyle: "none",
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "var(--font-size-xxs)",
                fontFamily: "var(--font-mono)",
                marginTop: "10px",
              }}
            >
              <Box component="li" sx={{ marginRight: "10px" }}>
                React
              </Box>
              <Box component="li" sx={{ marginRight: "10px" }}>
                JavaScript
              </Box>
              <Box component="li">Tailwind CSS</Box>
            </Box>
          </ProjectWrapper>
        </Box>
        <Box component="li" sx={{ marginBottom: "15px" }}>
          <ProjectWrapper>
            <Box className="links">
              <Box sx={{ textAlign: "right" }}>
                <Box
                  component="a"
                  rel="noopener noreferrer"
                  href="https://github.com/pinjaalanne/mushroom-checker-app"
                  target="_blank"
                >
                  <GitHubIcon
                    sx={{
                      "&:hover": { color: "var(--yellow)" },
                      fontSize: "var(--font-size-xl)",
                      marginRight: "15px",
                      color: "var(--slate)",
                    }}
                  />
                </Box>
                <Box
                  component="a"
                  rel="noopener noreferrer"
                  href="https://mushroomchecker.netlify.app/"
                  target="_blank"
                >
                  <OpenInNewIcon
                    sx={{
                      "&:hover": { color: "var(--yellow)" },
                      fontSize: "var(--font-size-xl)",
                      color: "var(--slate)",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ color: "var(--lightest-slate)" }}>
                <Typography
                  sx={{ fontSize: "var(--font-size-lg)", fontWeight: "700" }}
                >
                  Mushroom Checker
                </Typography>
              </Box>
              <Box
                sx={{
                  color: "var(--light-slate)",
                  margin: "20px 0"
                }}
              >
                <Typography sx={{ fontSize: "var(--font-size-sm)" }}>
                  A web-based application that is used with the help of machine learning to classify and identify mushroom species uploaded by the user.
                </Typography>
              </Box>
            </Box>
            <Box
              component="ul"
              className="tech-list"
              sx={{
                listStyle: "none",
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "var(--font-size-xxs)",
                fontFamily: "var(--font-mono)",
                marginTop: "10px",
              }}
            >
              <Box component="li" sx={{ marginRight: "10px" }}>
                React
              </Box>
              <Box component="li" sx={{ marginRight: "10px" }}>
                TypeScript
              </Box>
              <Box component="li" sx={{ marginRight: "10px" }}>Tailwind CSS</Box>
              <Box component="li">Material UI</Box>
            </Box>
          </ProjectWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
