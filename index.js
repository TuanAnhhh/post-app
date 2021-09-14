import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRouter from './routers/posts.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URL_CONNECT = process.env.MONGO_URL_CONNECT

// middleware
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true, limit: '30mb'}))
app.use(cors())

// db
mongoose.connect(MONGO_URL_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log("DB connect success!!")
        // start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!!!`)
        })
        
    })
    .catch(err=> {
        console.log('Err:',err)
    })

// routers
app.use('/api/posts', postRouter)

