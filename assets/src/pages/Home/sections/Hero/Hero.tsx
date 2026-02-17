import DownloadIcon from "@mui/icons-material/Download";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "../../../../../src/assets/images/Profile_DB.jpg";

const StyledHero = styled("section")(() => ({
  backgroundColor: "black",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  maxWidth: 260,
  borderRadius: "50%",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4} textAlign="center">
            <StyledImg src={Avatar} alt="Profile" />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              color="primary"
              sx={{ typography: { xs: "h3", md: "h2" }, textAlign: "center" }}
            >
              Diego Bezerra
            </Typography>

            <Typography
              color="primary"
              sx={{ typography: { xs: "h5", md: "h4" }, textAlign: "center", mt: 1 }}
            >
              I&apos;m a Data Engineer
            </Typography>

            <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12} md="auto" display="flex" justifyContent="center">
                <Button variant="contained" startIcon={<DownloadIcon />}>
                  Download CV
                </Button>
              </Grid>

              <Grid item xs={12} md="auto" display="flex" justifyContent="center">
                <Button variant="outlined" startIcon={<MarkEmailReadIcon />}>
                  Contact
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
