export function addTrackToPlaylist(req, res) {
  // extract necessary information from request body and params
  // add track to track library in database
    // if track cannot be added
  // add track to specified playlist
  // status 200
  // send track object
  // if track cannot be added
    // status 500
    // 'unable to add track'
}

export function deleteTrackFromPlaylist(req, res) {
  // remove track from playlist
  // if track is not in any other playlist
    // delete from track library
  // status 200
  // send track object
  // if track cannot be deleted
    // status 500
    // unable to delete track
}

export function fetchAllTracks(req, res) {
  // return array of all tracks
}