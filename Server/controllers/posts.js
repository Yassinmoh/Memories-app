const Post =require('../models/post')

exports.getPosts=async (req, res) =>{
    try{
        const post = await Post.find({})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.createPost=async (req, res) =>{
    const post = req.body
    const newPost =new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}