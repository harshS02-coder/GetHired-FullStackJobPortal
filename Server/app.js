import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebHook } from './controllers/WebHooks.js';
import companyRoutes from './routes/companyRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'

const app = express();

// Connect to MongoDB first
await connectDB();
await connectCloudinary(); // we need to run this as the server gets start
console.log("connected to cloudinary")

app.use(cors());

// (must be before express.json)
app.post(
  '/webhooks', 
  express.raw({ type: 'application/json' }), 
  clerkWebHook
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware())


app.use('/api/company', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/user', userRoutes);

//root route for testing
app.get('/', (req, res) => res.send("API working"));

// Debug-route for Sentry
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// Sentry error handler should be at lAST
Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
