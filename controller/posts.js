import { Post } from "../models/Post.js"

//GET POSTS
export const  getPosts = async (req, res)=> {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({error})
    }
}
//CREATE POST
export const  createPost = async (req, res)=> {
    try {
        const newPost = req.body
        const post = new Post(newPost)
        await post.save()
        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json({error})
        
    }
}
//UPDATE POST
export const  updatePost = async (req, res)=> {
    try {
        const updatePost = req.body
        // params of findOneAndUpdate(conditon,newObject, if (new: true) return newObject else rerurn oldOnject)
        const post = await Post.findOneAndUpdate({_id:updatePost._id},updatePost,{new: true})
        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json({error})
        
    }
}