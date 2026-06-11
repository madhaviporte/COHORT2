import express from 'express';

const app = express()

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Hello, World!')
})

app.get('/api/data', (res,req)=>{
    const data = {
        message:'This is some sample data from the API.',
        timestamp: new Date(),
    }
    res.json(data);
})
export default app;