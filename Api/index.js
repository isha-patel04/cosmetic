const express =   require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
const  cosmetic=require('./cosmeticSchema')

const connectionString="mongodb+srv://isha:ishapatel2411@cluster0.j6qi2.mongodb.net/CSh_147";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected to MongoDB");

    const app = express();
    app.use(cors());
    app.use(bodyParse.json());

    app.get('/item',async(req,res)=>{
        const ans = await cosmetic.find();
        res.json(ans);
    })
    app.get("/item/:id",async(req,res)=>{
        console.log("get by id")
        const ans = await cosmetic.findOne({ id: req.params.id });
        res.json(ans);
    });
    app.post("/item/add",async(req,res)=>{
        console.log("post")
        const new_item = new cosmetic(req.body);
        const ans = await new_item.save();
        res.json(ans);

    });
    app.patch("/item/update/:id",async (req,res)=>{
        const ans = await cosmetic.findOneAndUpdate({id:req.params.id},req.body);
        res.json(ans);
    });
    app.delete("/item/remove/:id",async(req,res)=>{
        const ans = await cosmetic.deleteOne({id:req.params.id});
        console.log("sdjcjjc")
        res.json(ans);
    });
    app.listen(4000,()=>{
        console.log("Server is running on port 4000");
    })


})