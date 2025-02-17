"use client";

import { useState } from "react";
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
  const [userType, setUserType] = useState<"nurse" | "doctor">("nurse");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    doctorLicense: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    
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
      className="bg-darksmoke"
    >
      <Typography
        variant={'h6'}
        color='black'
      >
        Register your Account
      </Typography>
      <FormControl component="fieldset" sx={{ my: 2 }}>
        <RadioGroup className="wildcard" row value={userType} onChange={(e) => setUserType(e.target.value as "nurse" | "doctor")}>
          <FormControlLabel value="nurse" control={<Radio />} label="Nurse" />
          <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
        </RadioGroup>
      </FormControl>

      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} margin="normal" required />
        <TextField fullWidth type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
        <TextField fullWidth type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} required />

        {userType === "doctor" && (
          <TextField
            fullWidth
            label="License Number (MDCN approved)"
            name="doctorLicense"
            value={formData.doctorLicense}
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
