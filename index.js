import express from 'express';
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';

let app = express();
// middlewares 
app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/comments', commentRoutes)


app.listen(8800, () => {
    console.log('listening on port 8800');
}
)