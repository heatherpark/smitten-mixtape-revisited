import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  name: String,
  tracks: {
    type: Array,
    default: []
  }
});

export default mongoose.model('Playlist', playlistSchema);