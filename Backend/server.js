const{app}=require("./app")
require("dotenv").config()

const port=process.env.PORT 

app.get("/lakshmi",async(req,res)=>{
    res.send("HII....")
})
app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`)
})
