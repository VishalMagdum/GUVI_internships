import express from "express";
import path from "path";
const app = express();
import "./db/conn";

const port = process.env.PORT || 3000;
const static_path = path.join(_dirname,"../public")
console.log()
app.use(express.static(static_path));

app.get("/",(req,res)=>{
   res.send("hello")

});
app.listen(port,()=>{
    console.log(`hello form server ${port}`);
});