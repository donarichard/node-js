const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        data:"Kubernetes API Server"
    })
})

app.get('/healthz', (req, res) => {
    res.send('OK');
})


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});