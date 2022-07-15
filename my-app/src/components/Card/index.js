import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";


export default function CardTemplate() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: 0 }}>
        <Grid item>
          <Card sx={{ minWidth: 278, minHeight: 500, boxShadow: 5 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                To Do 
              </Typography>
              <Typography variant="h5" component="div">
               Task tittle
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Description:
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Assigned:
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 278, minHeight: 500,boxShadow: 5 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                In progress
              </Typography>
              <Typography variant="h5" component="div">
               Task tittle
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Description:
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Assigned:
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 278, minHeight: 500,boxShadow: 5 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Done
              </Typography>
              <Typography variant="h5" component="div">
               Task tittle
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Description:
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Assigned:
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
        
        
      </Grid>
    </>
  );
}
