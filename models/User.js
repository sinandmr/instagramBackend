import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Kullanıcı Adı zorunludur..'],
  },
  email: {
    type: String,
    unique: [true, 'Bu eposta zaten kullanılıyor.'],
    required: [true, 'Eposta adresi zorunludur. '],
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ppLink: String,
  description: String,
  posts: Array,
  followReq: Array,
  followers: Array,
  following: Array,
  likedPosts: Array,
});

export default mongoose.model('User', userSchema);
