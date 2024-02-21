const express = require('express');
const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const time_elapsed = Date.now() - start;
    console.log(`${req.ip} ${req.baseUrl}${req.url} ${req.method}: ${time_elapsed} ms`)
})

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log("The app is listing the port:", PORT)
})