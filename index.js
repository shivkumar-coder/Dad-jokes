import express from "express";
import axios from "axios";

const app = express();
const port=3000;

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    
    try{
        let response= await axios.get("https://official-joke-api.appspot.com/jokes/random");
        res.render("index.ejs",{"setup":response.data["setup"], "punchline":response.data["punchline"]});

    }catch(error){
        console.log("error::"+error.message+" --"+error.response);
        res.status(500);

    }
    

    
})

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})