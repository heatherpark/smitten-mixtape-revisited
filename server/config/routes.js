import { addTrackToPlaylist, deleteTrackFromPlaylist, fetchAllTracks } from './request-handlers';

export default (app, express) => {
  app.post('/playlist/:playlistId', addTrackToPlaylist);
  app.delete('/playlist/:playlistId/track/:trackId', deleteTrackFromPlaylist);  
  app.get('/playlist/:playlistId', (req, res) => {
    res.sendStatus(200);
  });  
  app.get('/tracks', fetchAllTracks)
;}