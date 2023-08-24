const express=require('express')
const cors =require('cors')
// require('./db/config')
const Config=require('./db/Config')
const User =require('./db/User')
const Program =require('./db/Program')
const app =express();
app.use(express.json())
app.use(cors())
app.post('/register', async (req, resp)=>{
    let Users=new User(req.body)
    let result = await Users.save();
    resp.send(result)

});
app.post("/login", async (req, resp)=>{
    // console.log(req.body)
    if(req.body.password && req.body.id)
    {
        let user = await User.findOne(req.body).select("-password");
        if(user)
        {
            resp.send(user)
            
        }else{
            resp.send({result:'no found'});
        }
    }else{
        resp.send({result:'no found'});
    }
});
app.post("/addmeating", async (req, resp)=>{
    let program= new Program (req.body);
    let result= await program.save();
    resp.send(result);
});
app.get("/meatings", async (req, resp)=>{
    let programs= await Program.find()
    if(programs.length>0){
        resp.send(programs);
    }else{
        resp.send({result:"not found"});
    }
});
app.delete("/cancel/:id", async (req, resp)=>{
    const result =await Program.deleteOne({id:req.params.body});
    resp.send(result);
});
app.get("/prefillpro/:id", async (req, resp)=>{
    let result = await Program.findOne({_id:req.params.id})
    if(result)
    {
        resp.send(result);

    }else{
        resp.send({result:"result not found"})

    }
})
app.put("/updatemeating/:id", async (req, resp)=>{
    let result = await Program.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    )
    resp.send(result);

});
app.get("/search/:key", async (req, resp)=>{
    let result= await Program.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    });
    resp.send(result)

})
app.listen(4500);
