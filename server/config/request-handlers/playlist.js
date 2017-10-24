export function addPlaylist(req, res) {
  // extract playlist name from request body
  // save playlist to database
  // database will set default value of playlist to an empty array
  // status 200
  // send playlist object as response
  // if unable to save playlist to database
    // status 500
    // 'unable to add playlist'
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