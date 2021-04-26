const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.get('/',(request,response)=>{
    response.sendFile('./views/landing.html', { root: __dirname });
})


app.listen(port , ()=>{
    console.log('server is running on port '+port);
})