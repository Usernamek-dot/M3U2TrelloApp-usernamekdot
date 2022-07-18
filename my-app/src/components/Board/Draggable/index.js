import Draggable from "react-draggable";
import { Card, CardContent, Typography } from "@mui/material";

export default function DraggableComponent() {
  return (
    <Draggable>
      <div>
        <Card
          sx={{
            backgroundColor: "#7f8c8d",
            margin: 2,
            height: 50,
            textAlign: "center",
            borderRadius: 2
          }}
        >
          <CardContent>
            <Typography>Task</Typography>
          </CardContent>
        </Card>
      </div>
    </Draggable>
  );
}
