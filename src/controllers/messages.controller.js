function getMessages(req, res) {
    res.send("<h1>The evolution, baby!</h1>");
}

function postMessage(req, res) {
    const message = req.body.message;
    if (!message) {
        return res.status(400).send("The message is empty!")
    }
    return res.send(`<h1>${message}</h1>`)
}

module.exports = {
    getMessages,
    postMessage,
}