import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Kullanıcı Adı zorunludur'],
  },
  numberOfLike: Number,
  postImg: {
    type: String,
    required: [true, 'Fotoğraf zorunludur'],
  },
  description: String,
  comments: Array,
  whoLike: Array,
});

export default mongoose.model('Post', postSchema);
