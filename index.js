require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;
const todoRoutes = require("./routes/todoRoutes");

connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.send("everything is okay!!");
});

// routes
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Todo app listening on port ${PORT}`);
});
