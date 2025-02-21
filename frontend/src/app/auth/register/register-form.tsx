"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { 
  Box, 
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton, 
  InputAdornment, 
  Radio, 
  RadioGroup, 
  TextField, 
  Typography 
} from "@mui/material";

export default function RegistrationForm() {
  const router = useRouter();
  const [userType, setUserType] = useState<"nurses" | "doctors">("nurses");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    doctorsLicense: "",
    nursesLicense: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hashValue = window.location.hash.replace("#", "");
      if (hashValue === "nurses" || hashValue === "doctors") {
        setUserType(hashValue);
      }
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    }
    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions.");
    }

    try {
      const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string;
      const response = await fetch(`${SERVER_URL}/api/${userType}`, {
        method: 'POST',
        body: JSON.stringify({ ...formData, userType}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok){
        const errorData = await response.json();

        alert(errorData.message || "Registration failed.");
        return;
      }
      
      router.push('/dashboard');
    } catch(err: any) {
      console.error("Error during registration", err);
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
      className="bg-darksmoke"
    >
      <Typography
        variant={'h6'}
        color='black'
      >
        Register your Account
      </Typography>
      <FormControl component="fieldset" sx={{ my: 2 }}>
        <RadioGroup className="wildcard" row value={userType} onChange={(e) => setUserType(e.target.value as "nurses" | "doctors")}>
          <FormControlLabel value="nurses" control={<Radio />} label="Nurse" />
          <FormControlLabel value="doctors" control={<Radio />} label="Doctor" />
        </RadioGroup>
      </FormControl>

      <form onSubmit={handleSubmit}>
        <section id={userType}>
          <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} margin="normal" required />
          <TextField fullWidth type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} required />

          {userType === "nurses" && (
            <TextField
              fullWidth
              label="License Number (NMCN approved)"
              name="nursesLicense"
              value={formData.nursesLicense}
              onChange={handleChange}
              margin="normal"
              required
            />
          )}

          {userType === "doctors" && (
            <TextField
              fullWidth
              label="License Number (MDCN approved)"
              name="doctorsLicense"
              value={formData.doctorsLicense}
              onChange={handleChange}
              margin="normal"
              required
            />
          )}

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

          <TextField
            fullWidth
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </section>
       
        <FormControlLabel
          className="text-dark my-1"
          control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />}
          label="I agree to the Terms & Conditions"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
}
