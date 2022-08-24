const express = require('express');
const route =express.Router();
const app = express();
const Post = require("../model/Post");
const dotenv = require('dotenv');

dotenv.config({path:'config.env'});

app.use(express.json());

const getAllPosts = (req, res) => {
    Post.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

const createPost = async (req, res) => {
    try {
        const myUser = new Post(req.body);
        await myUser.save();
        res.send(myUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deletePost = (req, res) => {
    Post.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
}

module.exports = {getAllPosts,createPost,deletePost};