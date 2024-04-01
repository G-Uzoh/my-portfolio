import { Box, Typography } from "@mui/material";

const Experience = () => {
    return (
        <Box component="section" id="experience">
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
        </Box>
    )
}

export default Experience;