const express = require('express');
const app = express();

const path = require('path');



app.use(express.static('client'));

app.get('/quickBlox', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','index.html'));
});

console.log('Server started.')
app.listen(process.env.PORT || 5000);