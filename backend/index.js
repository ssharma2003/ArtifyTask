import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import projectRoutes from './routes/projectRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import equipmentRoutes from './routes/equipmentRoutes.js';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

import {connectDB} from './db.js'
connectDB();

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/equipment', equipmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
