const express = require("express");
const dotenv = require("dotenv");
const { userController } = require("./src/controllers/userController");
dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000


app.use("/",userController)

//routes
app.use("/api/v1/user",require("./routes/userRoutes"));




app.listen(PORT,()=>{
  console.log(`Server is listening on PORT ${PORT}`);
})