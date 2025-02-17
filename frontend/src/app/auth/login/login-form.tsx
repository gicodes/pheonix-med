"use client";

import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { 
  Box, 
  Button, 
  IconButton, 
  InputAdornment, 
  TextField ,
  Typography
} from "@mui/material";

export default function LoginForm() {
  const [userType, setUserType] = useState<"nurse" | "doctor">("nurse");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", { ...formData, userType });
  };

  return (
    <Box 
      sx={{ 
        p: 3,  
        mx: "auto", 
        boxShadow: 2,
        maxWidth: 400, 
        borderRadius: 2, 
      }}
      className="bg-lightsmoke"
    >
      <Typography
          variant={'h6'}
          color='black'
        >
          Login to your Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
}
