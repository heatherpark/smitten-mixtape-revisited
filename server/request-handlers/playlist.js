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
      res.status(500).json(error);
    });
}

export function fetchPlaylist(req, res) {
  // extract playlist ID from request params
  // grab playlist from database using ID
  // status 200
  // send as response
  // if playlist not found
    // status 500
    // 'unable to fetch playlist'
}