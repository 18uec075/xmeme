import mongoose from 'mongoose';



const postSchema = new mongoose.Schema({
    name: String,
    url: String,
    caption: String,
},{
    versionKey: false,
    unique: true
})
 
const Post = mongoose.model('Post', postSchema)

export default Post;
