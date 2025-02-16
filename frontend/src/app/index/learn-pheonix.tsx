import { Card } from "@mui/material";
import { AboutPhenixText } from "./box&cards/text-cards";

export const LearnAboutPheonix = () => (
  <Card 
    sx={{ 
      p: 2, my: { xs: 3, sm: 2},  
      background: 'linear-gradient(45deg, skyblue, #FFA500, #fff)',
    }}
    >
    <AboutPhenixText />
  </Card>
)