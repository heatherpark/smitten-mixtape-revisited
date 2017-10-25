import * as requestHandlers from '../request-handlers';

export default (app, express) => {
  // playlist
  app.post('/playlist/:playlistId', requestHandlers.addPlaylist);
  app.get('/playlist/:playlistId', requestHandlers.fetchPlaylist);  

  // tracks
  app.post('/playlist/:playlistId/track', requestHandlers.addTrackToPlaylist);
  app.delete('/playlist/:playlistId/track/:trackId', requestHandlers.deleteTrackFromPlaylist);  
  app.get('/tracks', requestHandlers.fetchAllTracks)
};