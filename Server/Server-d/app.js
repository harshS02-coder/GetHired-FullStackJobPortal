import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebHook } from './controllers/WebHooks.js';

const app = express();

// Connect to MongoDB first
await connectDB();

// CORS — keep it before normal JSON routes, but after webhook
app.use(cors());

// ✅ Webhook route FIRST with raw body (must be before express.json)
app.post(
  '/webhooks', 
  express.raw({ type: 'application/json' }), 
  clerkWebHook
);

// ✅ Now parse JSON for all other routes
app.use(express.json());

// Example root route
app.get('/', (req, res) => res.send("API working"));

// Debug route for Sentry
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// ✅ Sentry error handler LAST
Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
