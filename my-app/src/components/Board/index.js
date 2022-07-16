import { Container, Grid, Card, Typography } from "@mui/material";

export default function CardTemplate2() {
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#7f8c8d", minHeight: 800 }}
    >
      <Grid container padding={5}>
        <Grid
          item
          sx={{
            minHeight: 600,
            minWidth: 350,
            backgroundColor: "rgba(0,0,0,0.5)",
            margin: 2,
            boxShadow: 5,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Card sx={{ boxShadow: 3, margin: 1 }}>card</Card>
        </Grid>
        <Grid
          item
          sx={{
            minHeight: 600,
            minWidth: 350,
            backgroundColor: "rgba(0,0,0,0.5)",
            margin: 2,
            boxShadow: 5,
            borderRadius: 5,
          }}
        >
          column
        </Grid>
        <Grid
          item
          sx={{
            minHeight: 600,
            minWidth: 350,
            backgroundColor: "rgba(0,0,0,0.5)",
            margin: 2,
            boxShadow: 5,
            borderRadius: 5,
          }}
        >
          column
        </Grid>
      </Grid>
    </Container>
  );
}
