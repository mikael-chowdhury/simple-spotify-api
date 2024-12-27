import {
  AudioAnalysisObject,
  AudioFeaturesObject,
  RecommendationSeedObject,
  SpotifyList,
  TrackObject,
} from "../../@types/types";
import SpotifyApiClient from "../SpotifyApiClient";

export default class Track {
  constructor(private client: SpotifyApiClient) {}

  getTrack(trackId: string): Promise<TrackObject> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/tracks/${trackId}`).then((response: any) => {
        res(response.data as TrackObject);
      });
    });
  }

  getTracks(trackIds: string[]): Promise<TrackObject[]> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get("/tracks?ids=" + trackIds.join(",")).then((response: any) => {
        res(response.data.tracks as TrackObject[]);
      });
    });
  }

  getAudioFeatures(trackId: string): Promise<AudioFeaturesObject> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/audio-features/${trackId}`).then((response: any) => {
        res(response.data as AudioFeaturesObject);
      });
    });
  }

  getSeveralAudioFeatures(trackIds: AudioFeaturesObject[]): Promise<AudioFeaturesObject[]> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get("/audio-features?ids=" + trackIds.join(",")).then((response: any) => {
        res(response.data.audio_features as AudioFeaturesObject[]);
      });
    });
  }

  getAudioAnalysis(trackId: string): Promise<AudioAnalysisObject> {
    return new Promise((res, rej) => {
      this.client.apiHelper.get(`/audio-analysis/${trackId}`).then((response: any) => {
        res(response.data as AudioAnalysisObject);
      });
    });
  }

  getRecommendations(options: {
    seed_tracks: string[];
    seed_artists?: string[];
    seed_genres?: string[];
  }): Promise<{ seeds: RecommendationSeedObject[]; tracks: SpotifyList<TrackObject> }> {
    return new Promise((res, rej) => {
      const query = Object.keys(options)
        .map((key) => {
          return key + "=" + options[key as keyof typeof options]!.join(",");
        })
        .join("&");
      this.client.apiHelper.get(`/recommendations?${query}`).then((response: any) => {
        res(response.data as any);
      });
    });
  }
}
