const { friends } = require('../models/friends.model');

function getFriends(req, res) {
    return res.json(friends)
}
function getFriendById(req, res) {
    const id = req.params.id;
    const friend = friends.find((friend) => friend.id === id);
    if (id && friend) {
        res.json(friend);
    } else {
        res.status(404).json({ error: "Coud not find the friend" });
    }
}
function addFriend(req, res) {

    const { name, profession } = req.body;
    if (!name) {
        return res.status(400).json({
            error: "Missing name of a new friend"
        })
    }
    if (!profession) {
        return res.status(400).json({
            error: "Missing profession of a new friend"
        })
    }
    const id = 1 + friends.reduce((maxId, friend) => {
        return Math.max(maxId, friend.id)
    }, 0)
    console.log("lastId is ", id);
    const newFriend = {
        id,
        name,
        profession
    };
    friends.push(newFriend)
    res.json(newFriend);
}

module.exports = {
    getFriendById,
    getFriends,
    addFriend,
}