import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <Box 
      p={{ 
        xs: '5rem 0.5rem 0 0.5rem', 
        sm: '5rem 1rem 0 1rem', 
        md: '3rem 2rem 0 2rem'
      }}
    >
      {children}
    </Box>
  );
}
