import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  trackId: Number,
  user: String,
  title: String,
  permalink: String,
  image: String,
  duration: Number
});

export default mongoose.model('Track', trackSchema);