const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();

require("./db/conn");

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","https://gofood-delivery.onrender.com/");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/api",require("./router/auth"));
// app.use(express.static('./client/dist'));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "dist",     
//   "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Listening to port no. ${PORT}`);
});