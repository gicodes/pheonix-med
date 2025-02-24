"use client"
import React, { useState } from 'react';
import { UserData } from '../../user-profile';
import { Card, Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

const AdminConsole = () => {
  const [users, setUsers] = useState<any | null>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: '' });
  const [updateUserData, setUpdateUserData] = useState({ id: '', name: '', email: '', role: '' });
  const [deleteUserId, setDeleteUserId] = useState(0);
  const [usersList, setUsersList] = useState(false);
  const [createUserForm, setCreateUserForm] = useState(false);
  const [updateUserForm, setUpdateUserForm] = useState(false);

  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  
  // Admin CRUD Actions
  const handleCreateUser = async () => {// Create a new user
    try {
      const response = await fetch(`${SERVER_URL}/api/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) throw new Error('Failed to create user');

      const createdUser = await response.json();
      alert(`${createdUser?.name} User created successfully`);
  
      setNewUser({ name: '', email: '', password: '', role: '' });
      fetchAllUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  const handleUsersList = (e: any) => {
    e.preventDefault();
    setUsersList(!usersList);
    if (usersList) fetchAllUsers();
  }

  const fetchAllUsers = async () => {// Retrieve all users
    try {
      const response = await fetch(`${SERVER_URL}/api/admin`);
      if (!response.ok) throw new Error('Failed to fetch users');
      
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      alert('Error fetching users from server');
      console.error('Error fetching users:', error);
    }
  };

  const handleUpdateUser = async () => {// Update a user
    try {
      const { id, name, email, role } = updateUserData;
      const response = await fetch(`${SERVER_URL}/api/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  id, name, email, role})
      });

      if (!response.ok) throw new Error('Failed to update user');

      alert('User updated successfully');
      setUpdateUserData({ id: '', name: '', email: '', role: '' });

      fetchAllUsers();
    } catch (error) {
      alert('Error updating user');
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async () => {// Delete a user
    if(deleteUserId===0) {
      alert("Input a valid user ID"); 
      return;
    }

    alert(`Deleting user with ID ${deleteUserId}`)
    try {
      const response = await fetch(`${SERVER_URL}/api/admin/${deleteUserId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');

      alert('User deleted successfully');
      setDeleteUserId(0);

      fetchAllUsers();
    } catch (error) {
      alert('Error deleting user');
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Card
      sx={{
        p: 2,
        mt: 9,
        width: '100%',
      }}
    >
      <Box mx="auto" width={{ md: '750px' }}>
        <Typography my={1} textAlign="center"> Admin Panel </Typography>

        <Stack mx="auto" my={2} width={{ md: '50%' }} spacing={2}>

          {/* Retrieve all users */}
          <Button variant="contained" onClick={handleUsersList}>View All Users</Button>

          {usersList && users.length > 0 && (
            <Box my={1} p={2} border="1px solid #ccc" borderRadius={2}>
              {users.map((user: UserData) => (
                <Box key={user?.id} my={1} p={1} borderBottom="1px solid #eee">
                  <Typography variant='caption' color='red'> User id: &nbsp; ( {user?.id} )</Typography>
                  <Typography variant="body2">Office: &nbsp; <span className='fs-small'>{user?.role}</span></Typography>
                  <Typography variant="body2">Name: &nbsp; <span className='fs-small'>{user?.name}</span></Typography>
                  <Typography variant="body2">Email: &nbsp; <span className='fs-small text-gray'>{user?.email}</span></Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Create a new user */}
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => setCreateUserForm(!createUserForm)}
          > 
            Create a New User
          </Button>
          {createUserForm && 
          <Box my={1} p={2} border="1px solid #ccc" borderRadius={2}>
            <TextField
              label="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="new-user-role-label">Role</InputLabel>
              <Select
                labelId="new-user-role-label"
                id="new-user-role"
                value={newUser.role}
                label="Role"
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="nurse">Nurse</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleCreateUser} variant="contained" sx={{ mt: 1 }}>Submit</Button>
          </Box>}

          {/* Update a user */}
          <Button 
            variant="contained" 
            color="info" 
            onClick={() => setUpdateUserForm(!updateUserForm)}
          >
            Update a User
          </Button>
          {updateUserForm && 
          <Box my={1} p={2} border="1px solid #ccc" borderRadius={2}>
            <TextField
              label="User ID"
              value={updateUserData.id}
              onChange={(e) => setUpdateUserData({ ...updateUserData, id: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name"
              value={updateUserData.name}
              onChange={(e) => setUpdateUserData({ ...updateUserData, name: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={updateUserData.email}
              onChange={(e) => setUpdateUserData({ ...updateUserData, email: e.target.value })}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="updated-user-role-label">Role</InputLabel>
              <Select
                labelId="updated-user-role-label"
                id="updated-user-role"
                value={updateUserData.role}
                label="Role"
                onChange={(e) => setUpdateUserData({ ...updateUserData, role: e.target.value })}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="nurse">Nurse</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleUpdateUser} variant="contained" sx={{ mt: 1 }}>Update</Button>
          </Box>
          }

          {/* Delete a user */}
          <Button variant="contained" disabled>Delete a User</Button>
          <Box p={2} border="1px solid #ccc" borderRadius={2}>
            <TextField
              label="User ID"
              value={deleteUserId}
              onChange={(e) => setDeleteUserId(Number(e.target.value))}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleDeleteUser} variant="contained" color='error'>Confirm Delete</Button>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default AdminConsole;