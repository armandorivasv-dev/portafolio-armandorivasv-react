import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

const MessageToAction = ({ intro, title, message, color }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 4,
        pb: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {intro}
        </Typography>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color={color}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          {message}
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            href="mailto:armandorivasv.dev@gmail.com"
            target="_blank"
            variant="contained"
            color="buttonColor"
            endIcon={<EmailIcon />}
          >
            CONTACTAME
          </Button>
          <Button
            href="..\assets\cv\cv-armando-rivas-desarrollador-frontend-react-19jun.pdf"
            variant="contained"
            color="buttonColor"
            endIcon={<DownloadIcon />}
            download="cv-armando-rivas-frontend-react"
          >
            DESCARGA CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default MessageToAction;
