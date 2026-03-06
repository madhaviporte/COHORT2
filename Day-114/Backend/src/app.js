const express = require("express");
const cookiePasrser = require("cookie-parser");

const app = express()
app.use(express.json());
app.use(cookiePasrser());

// Routes

const authRoutes = require("./routes/auth.routes")
app.use("/api/auth", authRoutes)

module.exports=app;