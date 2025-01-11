const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
// Middleware
pp.use(cors());
pp.use(express.json());
// MongoDB connection
const uri = process.env.MONGODB_URI;
ongoose.connect(uri, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});  
const connection = mongoose.connection;
onnection.once('open', () => {
 console.log("MongoDB database connection established successfully");
});
// Routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
pp.get('/api/test', (req, res) => {
 res.json({ message: 'Backend is working!' });
});
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});