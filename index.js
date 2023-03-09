const  express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users/:user', (req, res)=>{
    
    res.json(req.params);
})

app.use((req, res)=>{
    res.status(404);
    res.send(`<h1>Error!</h1>`);

});

app.listen(3000, ()=>{
    console.log("Testing");
})