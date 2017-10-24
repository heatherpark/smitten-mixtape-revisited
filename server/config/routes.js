import { addTrackToPlaylist, deleteTrackFromPlaylist, fetchAllTracks, fetchPlaylist } from './request-handlers';

export default (app, express) => {
  app.post('/playlist/:playlistId', addTrackToPlaylist);
  app.delete('/playlist/:playlistId/track/:trackId', deleteTrackFromPlaylist);  
  app.get('/playlist/:playlistId', fetchPlaylist);  
  app.get('/tracks', fetchAllTracks)
;}