const Post = require('../models/post')

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

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

