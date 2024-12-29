import {
  AlbumObject,
  ArtistObject,
  AudiobookObject,
  PlaylistObject,
  SimplifiedAlbumObject,
  SimplifiedArtistObject,
  SimplifiedAudiobookObject,
  SimplifiedPlaylistObject,
  SimplifiedTrackObject,
  SpotifyList,
  TrackObject,
} from "../../@types/types";
import SpotifyApiClient from "../SpotifyApiClient";

export default class Search {
  constructor(private client: SpotifyApiClient) {}

  searchAlbums(query: string): Promise<SpotifyList<AlbumObject>> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/search?q=${query}&type=album`).then((response: any) => {
        res(response.data.albums as any);
      });
    });
  }

  searchArtists(query: string): Promise<SpotifyList<ArtistObject>> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/search?q=${query}&type=artist`).then((response: any) => {
        res(response.data.artists as any);
      });
    });
  }

  searchTracks(query: string): Promise<SpotifyList<TrackObject>> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/search?q=${query}&type=track`).then((response: any) => {
        res(response.data.tracks as any);
      });
    });
  }

  searchPlaylists(query: string): Promise<SpotifyList<PlaylistObject>> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/search?q=${query}&type=playlist`).then((response: any) => {
        res(response.data.playlists as any);
      });
    });
  }

  searchAudiobooks(query: string): Promise<SpotifyList<AudiobookObject>> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/search?q=${query}&type=audiobook`).then((response: any) => {
        res(response.data.audiobooks as any);
      });
    });
  }
}
