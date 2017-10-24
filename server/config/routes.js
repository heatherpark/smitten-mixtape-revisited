import { addPlaylist, addTrackToPlaylist, deleteTrackFromPlaylist, fetchAllTracks, fetchPlaylist } from './request-handlers';

export default (app, express) => {
  // playlist
  app.post('/playlist/:playlistId', addPlaylist);
  app.get('/playlist/:playlistId', fetchPlaylist);  

  // tracks
  app.post('/playlist/:playlistId/track', addTrackToPlaylist);
  app.delete('/playlist/:playlistId/track/:trackId', deleteTrackFromPlaylist);  
  app.get('/tracks', fetchAllTracks)
};