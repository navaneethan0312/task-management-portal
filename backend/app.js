const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


app.use("/tasks", taskRoutes);


const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = { app, server };
