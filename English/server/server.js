import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express(); app.use(cors()); app.use(express.json({limit:"1mb"}));
app.post("/api/chat",async(req,res)=>{
  const {provider="OpenAI",messages=[]}=req.body;
  const key=process.env.AI_API_KEY;
  const url=process.env.AI_API_URL;
  if(!key||!url)return res.status(503).json({error:"Configure AI_API_KEY and AI_API_URL on the server."});
  try{
    const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},body:JSON.stringify({model:process.env.AI_MODEL||"default",messages,provider})});
    const data=await r.json(); res.status(r.status).json(data);
  }catch(e){res.status(500).json({error:e.message})}
});
app.get("/api/health",(req,res)=>res.json({ok:true,service:"English Learning V2 AI proxy"}));
app.listen(process.env.PORT||3000,()=>console.log("AI proxy running on http://localhost:"+(process.env.PORT||3000)));
