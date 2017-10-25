import mongoose from 'mongoose';
import Playlist from '../database/models/Playlist';

mongoose.Promise = Promise;

export function addPlaylist(req, res) {
  const { name } = req.body;
  
  Playlist.create({ name })
    .then(playlist => { 
      res.status(200).json(playlist);
    })
    .catch(error => {
      console.error('Unable to add playlist');
      res.status(500).json(error);
    });
}

export function fetchPlaylist(req, res) {
  Playlist.findOne({ _id: req.params.playlistId })
    .then(playlist => {
      res.status(200).json(playlist);
    })
    .catch(error => {
      console.error('Unable to fetch playlist');
      res.status(500).json(error);
    });
}