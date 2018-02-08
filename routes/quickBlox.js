const express = require('express');
const path = require('path');

module.exports = app =>{
    app.get('/quickBlox', (req,res)=>{
        console.log('quickBlox');
        app.use(express.static('./client/quickBlox'));
        res.sendFile(path.resolve('./client/quickBlox','./index.html'));
    });
}