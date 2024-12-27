const spotify = require("../");

const client = new spotify.SpotifyApiClient({
  clientKey: process.env.SPOTIFY_CLIENT_KEY || "39b56f68bbd2454fad03cfa62c9a972e",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "5daa2941307842acaec64d160d2c0910",
});

client.getAccessToken().then(async (token) => {
  const playlist = await client.playlist.getPlaylist("6efCelZ7gfx4JkvLDPuUAg");

  client.artist.getArtistTopTracks("artist-id").then((tracks) => {
    console.log(tracks[0].name);
  });
});
