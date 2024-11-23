const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const portfolioRoutes = require('./routes/PortfolioRoutes'); // Correct import

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/portfolio', portfolioRoutes); // Use the imported routes

// Port
const PORT = process.env.PORT || 8000;
console.log('PORT:', PORT);
app.get("/",(req,res)=>{
    res.send("Portfolio Website")
});
app.get("/portfolio",(req,res)=>{
    res.send("KETAN PORTFOLIO")
})

// Listen
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
