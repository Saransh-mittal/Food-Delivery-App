const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();

require("./db/conn");

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
const PORT = process.env.PORT;
app.use("/api",require("./router/auth"));


app.listen(PORT, () => {
  console.log(`Listening to port no. ${PORT}`);
});