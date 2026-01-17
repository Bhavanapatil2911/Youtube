import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes imports
import userRoutes from './routes/user.routes.js';



// routes redirection
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'YouTube Backend API is running! 🚀',
    endpoints: {
      users: '/api/users'
    }
  });
});

export  {app};
