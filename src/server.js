const path = require('path');
const express = require('express');
const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

const PORT = 3000 || process.env.PORT;

const app = express();
app.set('view engine', 'hbs'); // to load template engine 'hbs'
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const time_elapsed = Date.now() - start;
    console.log(`${req.ip} ${req.baseUrl}${req.url} ${req.method}: ${time_elapsed} ms`)
})

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.use('/site', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Famous Friends',
        caption: 'My Famous Friends'
    })
})
app.listen(PORT, () => {
    console.log("The app is listing the port:", PORT)
})