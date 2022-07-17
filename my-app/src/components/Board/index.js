import { Container } from "@mui/material";
import CardComponent from "./Card";


export default function CardTemplate2() {
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#7f8c8d", minHeight: 800 }}
    >
        <CardComponent />
    </Container>
  );
}
