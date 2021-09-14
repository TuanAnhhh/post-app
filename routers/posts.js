import express from 'express'
const router = express.Router()
import {getPosts, createPost, updatePost} from './../controller/posts.js'

router.get('/', getPosts)
router.post('/', createPost)
router.post('/update', updatePost)


export default router