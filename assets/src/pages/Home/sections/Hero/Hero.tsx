import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { AnimatedBackground } from "../../../../../components/AnimatedBackground/AnimatedBackground";
import StyledButton from "../../../../../components/StyledButton/StyledButton";
import Avatar from "../../../../../images/Avatar.jpg";

const StyledHero = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  paddingTop: 0,
  [theme.breakpoints.down("md")]: {
    paddingTop: "100px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  maxWidth: 280,
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box
                position="absolute"
                width="150%"
                top={-100}
                right={0}
                sx={{ pointerEvents: "none" }}
              >
                <AnimatedBackground />
              </Box>

              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} alt="Diego Bezerra" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              sx={{ typography: { xs: "h3", md: "h2" }, textAlign: "center", pb: 2 }}
            >
              Diego Bezerra
            </Typography>

            <Typography
              color="primary.contrastText"
              sx={{ typography: { xs: "h5", md: "h4" }, textAlign: "center" }}
            >
              I&apos;m a Data Engineer
            </Typography>

            <Grid container justifyContent="center" spacing={3} sx={{ pt: 3 }}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("Download CV clicked")}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <DownloadIcon />
                    <Typography color="primary.contrastText">Download CV</Typography>
                  </Box>
                </StyledButton>
              </Grid>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("Contact me clicked")}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <MailOutlineIcon />
                    <Typography color="primary.contrastText">Contact me</Typography>
                  </Box>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero
