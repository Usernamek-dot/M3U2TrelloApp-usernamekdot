import { Grid, Card, CardHeader, CardContent, Divider } from "@mui/material";
import DraggableComponent from "../Draggable";
import { PendingActionsOutlinedIcon, PendingOutlinedIcon, CheckCircleOutlineOutlinedIcon } from '@mui/icons-material';

export default function CardComponent() {
  return (
    <Grid spacing={3} container>
      <Grid item>
        <Card sx={{ width: 290, height: 500, backgroundColor: "#34495e" }}>
          <CardHeader title="To Do" action={<PendingActionsOutlinedIcon />} />
          <Divider variant="fullWidth" />
          <CardContent>
            <DraggableComponent />
            <DraggableComponent />
            <DraggableComponent />
            <DraggableComponent />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ width: 290, height: 500, backgroundColor: "#34495e" }}>
          <CardHeader title="In Progress" action={<PendingOutlinedIcon />} />
          <Divider variant="fullWidth" />

          <CardContent>
            <DraggableComponent />
            <DraggableComponent />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ width: 290, height: 500, backgroundColor: "#34495e" }}>
          <CardHeader title="Done" action={<CheckCircleOutlineOutlinedIcon />} />
          <Divider variant="fullWidth" />

          <CardContent>
            <DraggableComponent />
            <DraggableComponent />
            <DraggableComponent />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
