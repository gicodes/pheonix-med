"use client"

import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  Stack, 
  TextField, 
  Typography, 
} from '@mui/material';
import { useAuth } from '../contexts/auth.context';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

interface UploadResponse {
  message: string;
}

const handleDocumentUpload = async (formData: FormData): Promise<UploadResponse> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/upload-a-doc`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Upload failed');

    return await response.json();
  } catch (error) {
    console.error('Error uploading document:', error);
    return { message: 'Upload failed!' };
  }
};

const DocumentUploadForm = () => {
  const { state } = useAuth();
  const [name, setName] = useState('');
  const [files, setFiles] = useState([]);
  const [extraInfo, setExtraInfo] = useState('')
  const [uploadStatus, setUploadStatus] = useState('');

  const userData = state?.user;

  const handleFileChange = (e: any) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!files.length) {
      alert('Please select at least one PDF file.');
      return;
    }

    const formData = new FormData();

    if (userData) {
      formData.append('name', userData.name || '');
      formData.append('user_id', userData.id?.toString() || '');
      formData.append('role', userData.role || '');
    } else { // collect name and extra info from unauthenticated users.
      formData.append('name', name);
      formData.append('extraInfo', extraInfo);
    }
    
    for (let i = 0; i < files.length; i++) { // append each selected file
      formData.append('files', files[i]);
    }

    const result = await handleDocumentUpload(formData);
    setUploadStatus(result.message || 'Upload completed');
  };

  return (
    <Card 
      sx={{ 
        p: 2,
        mx: 'auto',
        mt: { xs: '5rem', sm: '5rem', md: '0'},
        width: '100%',
        maxWidth: { md: 'max-content'},
      }}
    >
      <Box mx="auto" width={{ md: '750px' }}>
        <Typography variant="h6" textAlign="center">
          Upload a Document
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <Stack spacing={2}>
            {!userData && (
              <>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </>
            )}
            
            <input 
              type="file" 
              accept="application/pdf" 
              multiple 
              aria-label='Select PDF File(s)'
              onChange={handleFileChange}
            />

            <TextField
              label="Please add neccesary remarks regarding your documents"
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
              fullWidth
            />

            <Button type="submit" variant="contained">
              Upload Document
            </Button>

            { uploadStatus && (
              <Typography variant="body2" color="primary">
                {uploadStatus}
              </Typography>
            )}
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default DocumentUploadForm;
