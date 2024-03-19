let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function (req,res) {
    res.render ('index.html');
});

app.get('/addition', function (req,res) {
    let firstnum = req.query.firstnum; 
    let secondnum = req.query.secondnum;
    let sum = parseInt(firstnum) + parseInt(secondnum);
    let response = {data:sum, message: 'success', statusCode:200} 
    res.json(response);
});

app.listen(port, ()=>{
    console.log('Express server ported');
});