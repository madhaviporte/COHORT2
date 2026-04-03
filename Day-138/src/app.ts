import express from 'express';
import runGraph from './ai/graph.ai.js'

const app = express()


app.get('/', async (req,res)=>{
 const result = await runGraph("write a code for Factorial funtion in js")

 res.json(result)
})

export default app;