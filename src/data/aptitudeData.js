import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import BugReportIcon from "@mui/icons-material/BugReport";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const iconStyle = {
  fontSize: 40,
};

const aptitudeData = [
  {
    title: "Comunicación efectiva",
    icon: <RecordVoiceOverIcon sx={iconStyle} />,
    message:
      "Capacidad de comunicarme de manera clara y concisa tanto de forma oral como escrita, adaptando el mensaje al publico objetivo y escuchando activamente los planteamientos del equipo.",
  },
  {
    title: "Trabajo en equipo",
    icon: <Diversity3Icon sx={iconStyle} />,
    message:
      "Habilidad de trabajar bien con otros, contribuyendo con ideas, respetando la diversidad y cooperando para alcanzar objetivos comunes, adaptándome a cambios y situaciones imprevistas con actitud positiva.",
  },
  {
    title: "Resolución de problemas",
    icon: <BugReportIcon sx={iconStyle} />,
    message:
      "Capacidad de identificar, analizar y solucionar problemas de manera creativa y efectiva, analizar información y tomar decisiones bien fundamentadas, utilizando la lógica y el razonamiento.",
  },
  {
    title: "Aprendizaje continuo",
    icon: <LocalLibraryIcon sx={iconStyle} />,
    message:
      "Capacidad aprender de manera autonoma y autodidacta, mejorando mis capacidades y conocimientos constantemente, adquiriendo nuevas tecnologías que me permiten mejorar y desarrollarme como profesional.",
  },
];
export default aptitudeData;
