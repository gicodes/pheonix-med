import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {ExpandMore, ExpandLess} from "@mui/icons-material";
import { Drawer, Box, IconButton, Typography, Stack, Collapse, Link } from "@mui/material";

const MenuDrawer = ({ 
  open, toggleDrawer }: 
  { open: boolean; toggleDrawer: (open: boolean) => (
  event: React.KeyboardEvent | React.MouseEvent) => void }) => { 
     
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
  const handleSubMenuToggle = (menu: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const ParentMenuPages = ({
    caption, name, title}: 
    {caption: string; name: string; title: string}
  ) => (
    <div>
      <Typography 
        fontSize={"smaller"} 
        display={"flex"} 
        alignItems={"center"} 
        sx={{ cursor: "pointer" }} 
        onClick={() => handleSubMenuToggle(title)}
      >
        {caption} {openSubMenus[title] ? <ExpandLess /> : <ExpandMore />}
      </Typography>
      <Collapse in={openSubMenus[title]}>
        <Stack mt={1} pl={1} gap={1}>
          <Link 
            href={`/${title}`} 
            onClick={toggleDrawer(false)} 
            sx={{ cursor: "pointer" }}
          >
            <Typography 
              color="gold" 
              fontSize={"smaller"} 
              sx={{ cursor: "pointer" }}
            >
              {name==="Nurse" ? 'Employ a Nurse Nearby' : 'Speak with a Specialist'}
            </Typography>
          </Link>
          <Link 
            href={name==="Nurse" ? '/nurses/#leave-a-review' : `/doctors/#upload-a-report`} 
            onClick={toggleDrawer(false)}
          >
            <Typography color="gold" fontSize={"smaller"} sx={{ cursor: "pointer" }}>
              {name==="Nurse" ? 'Leave a Review' : 'Upload Doctors report'}
            </Typography>
          </Link>
        </Stack>
      </Collapse>
    </div>
  );  

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: { xs: 250, sm: 360},
          display: "flex",
          flexDirection: "column",
          bgcolor: "primary.main",
          height: "100%",
        }}
        role="presentation"
      >
        <Box 
          sx={{ 
            p: 1,
            display: "flex", 
            justifyContent: "flex-end", 
            }}
          >
          <Stack boxShadow={'0px 2px 10px rgba(0, 0, 0, 0.1)'}>
            <IconButton onClick={toggleDrawer(false)}>
              <span className="text-white fs-small">Close &nbsp;</span> <CloseIcon color="warning" />
            </IconButton>
          </Stack>
        </Box>

        <Stack gap={2} color={"wheat"} pt={10} mx={"auto"}>          
          <Link href="/pharmacy" onClick={toggleDrawer(false)}>
            <Typography color="wheat" fontSize={"smaller"} sx={{ cursor: "pointer" }}>
              Lock-in Pharmacy
            </Typography>
          </Link>

          <ParentMenuPages caption="Nurses & Homecare" name="Nurse" title="nurses" />

          <ParentMenuPages caption="Doctor Consultancy" name="Doctor" title="doctors" />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;