import multer from 'multer';
import express, { Request, Response } from 'express';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload-docs', upload.array('files'), (req: Request, res: Response) => {
  const { name, user_id, role, extraInfo } = req.body;
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    res.status(400).json({ error: 'No files uploaded' });
  }

  const invalidFiles = files.filter(file => file.mimetype !== 'application/pdf');
  if (invalidFiles.length > 0) {
    res.status(400).json({ error: 'Only PDF files are allowed' });
  }

  if (role === 'doctor') {
    console.log(`Received submission from authenticated doctor (ID: ${user_id || 'N/A'}, Name: ${name}).`);
  } else if (role === 'nurse') {
    console.log(`Received submission from authenticated nurse (ID: ${user_id || 'N/A'}, Name: ${name}).`);
  } else if (!role || role === 'null') {
    console.log(`Received unauthenticated submission (Name: ${name}, Extra Info: ${extraInfo || 'N/A'}).`);
  } else {
    res.status(400).json({ error: 'Invalid role' });
  }

  res.status(200).json({
    message: 'Document(s) uploaded successfully',
    files: files.map(file => ({
      originalName: file.originalname,
      storedName: file.filename,
      mimetype: file.mimetype,
    })),
  });
});

export default router;