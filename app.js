const path = require('path');
const PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./pr10-server');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use('/', router);

app.use(express.static('./script'));

app.get('/pr10', (req, res, next) => {
    res.render('/pr10', {
        title: 'Prove 10', 
        path: 'pr10'
      })
});

const server = app.listen(PORT)

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('Client connected')

    socket.on('new-name', () => {
        // Someone added a name! Tell everyone else to update the list.
        socket.broadcast.emit('update-list')
    })
})
