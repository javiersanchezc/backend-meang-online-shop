import compression from "compression";
import cors from "cors";
import express from "express";
import { appendFile } from "fs";
import { createServer } from "http";


const app =express()

app.use(cors());
app.use(compression());
app.get('/',(_,res)=>{
    res.send('API MEANG--*--online shop     --*--START     ');
});

const httpserver= createServer(app);
httpserver.listen({
    port:2020
},
()=>console.log('http://localhost:2020 API MEANG--*--online shop     --*--- START ---**---    '));

