const Post = require('../models/post')
const mongoose = require('mongoose')


exports.getPosts = async (req, res) => {
    try {
        const post = await Post.find({})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new Post({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}



exports.deletePost= async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await Post.findByIdAndRemove(id)
    res.json({message: 'Delete post Successfuly'})
}