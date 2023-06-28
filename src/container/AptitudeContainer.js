import React, { useContext } from "react";
import Box from "@mui/material/Box";
import ServiceItem from "../components/ServiceItem/ServiceItem";
import aptitudeData from "../data/aptitudeData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonColorContext from "../context/ButtonColorContext";

const AptitudeContainer = () => {
  const color = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Box>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color={color.color}
          gutterBottom
        >
          Aptitudes
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Habilidades adquiridas y adoptadas para mejorar mi trabajo en equipo.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {aptitudeData.map((e) => (
          <ServiceItem key={e.title} {...e} />
        ))}
      </Grid>
    </Container>
  );
};

export default AptitudeContainer;
