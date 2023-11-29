const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/healthz', (req, res) => {
    res.send('OK');
})


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});