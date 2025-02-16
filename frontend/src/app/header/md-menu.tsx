"use client";

import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Typography, Stack, Collapse, Link, MenuItem } from "@mui/material";

const MenuDisplay = () => {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const handleSubMenuToggle = (menu: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const MenuItemSx = {
    color: "wheat",
    fontFamily: "Times, Times New Roman, sans-serif",
    cursor: "pointer",
  };

  const ParentMenuPages = ({
    caption, name, title}: 
    {caption: string; name: string; title: string}
  ) => (
    <Stack>
      <MenuItem onClick={() => handleSubMenuToggle(title)}>
        <Typography sx={MenuItemSx}>{caption}</Typography>
        {openSubMenus[title] ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>

      <Collapse in={openSubMenus[title]}>
        <Stack mt={1} pl={2} gap={2} color={"yellow"}>
          <Link href={`/${title}`}sx={{ color: "gold", fontSize: "smaller", textDecoration: "none" }}>
            {name==="Nurse" ? 'See a nurse Nearby' : 'Speak with a Specialist'}
          </Link>
          <Link href={`/auth/register/#${title}`} sx={{ color: "gold", fontSize: "smaller", textDecoration: "none" }}>
            Register as a {name}
          </Link>
        </Stack>
      </Collapse>
    </Stack>
  ); 

  return (
    <Box
      gap={3}
      padding={2}
      width={"100%"}
      height={"auto"}
      bgcolor={"black"}
      justifyContent={"center"}
      display={{ xs: "none", md: "flex" }}
    >
      <ParentMenuPages caption="Nurse & Homecare" name="Nurse" title="nurses" />

      <ParentMenuPages caption="Doctor Consultancy" name="Doctor" title="doctors" />

      <MenuItem sx={{ position: "relative", display: "grid", alignItems: "flex-start" }}>
        <Link href="/pharmacy" sx={{ color: "wheat", fontSize: "smaller" }}>
          Lock-in Pharmacy
        </Link>
      </MenuItem>
    </Box>
  );
};

export const MenuSubTitle = () => {
  return (
    <Box>
      <Typography
        boxShadow={'0px 2px 10px rgba(0, 0, 0, 0.1)'}
        padding={2}
        borderRadius={1}
        fontSize="small"
        textAlign="center"
        sx={{ cursor: 'pointer' }}
        display={{ xs: 'none', md: 'grid' }}
      >
        Welcome to your all-in-one Medical Center
      </Typography>
    </Box>
  );
}

export default MenuDisplay;