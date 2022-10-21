import { connect } from "mongoose";

mongoose.connect("mongodb://localhost:27017/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true 
}).then(()=>{
    console.log(`connection successful`);
}).catch(()=>{
    console.log(`no connection`);
})