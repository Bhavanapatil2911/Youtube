import { Router } from "express";
import { registerUser } from '../controllers/user.controller.js';
import upload  from '../middelware/multer.middelware.js';
const router = Router();

// Test route
router.get('/', (req, res) => {
  res.json({ message: 'User routes working!' });
});

// Define user-related routes here
// Example: router.post('/register', registerUser);


router.route('/register').post(
    upload.fields([
      { name: 'avatar', maxCount: 1 },
      { name: 'coverImage', maxCount: 5 },
    ]), registerUser);



export default router;