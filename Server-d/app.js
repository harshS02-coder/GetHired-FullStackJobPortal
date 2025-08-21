import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebHook } from './controllers/WebHooks.js';

const app = express()

await connectDB()
Sentry.setupExpressErrorHandler(app);

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=> res.send("API working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

app.post('/webhooks', clerkWebHook);
  

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on the http://localhost:${PORT} `)
})