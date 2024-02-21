function getMessages(req, res) {
    res.send("<h1>The evolution, baby!</h1>");
}

function postMessage(req, res) {
    const message = req.body.message;
    if (!message) {
        return res.status(400).send("The message is empty!")
    } else {
        return res.render('messages', {
            title: 'Messages to the Famous Friends',
            friend: 'Albert',
            message
        })
    }

}

module.exports = {
    getMessages,
    postMessage,
}