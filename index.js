const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/routes'));


app.set('port', 3020);

app.listen(app.get('port'), () => {
    console.log(`Server on port: `,app.get('port'));
})