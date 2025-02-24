"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { useAuth } from "@/app/contexts/auth.context";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string;
      const response = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ ...formData}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok){
        const errorData = await response.json();

        alert(errorData.message || "Login attempt failed.");
        return;
      }

      const user = await response.json();

      dispatch({ type: "LOGIN", payload: user });
      alert("Login successful!");
      
      if (user.role==="admin") {
        router.push('/dashboard/admin/console');
        return
      }
      
      router.push('/dashboard');
    } catch(err: any) { 
      if (err.message==="Failed to fetch") {
        alert("Username or password incorrect");
        return;
      }     
      console.error("Login failed", err);
      alert("An unexpected error occurred.");
    }
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
