const express = require('express');
const { getFriends, getFriendById, addFriend } = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.get('/', getFriends);
friendsRouter.get('/:id', getFriendById);
friendsRouter.post('/', addFriend);

module.exports = friendsRouter;