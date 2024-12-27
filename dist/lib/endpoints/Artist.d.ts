import { ArtistObject, SimplifiedArtistObject, TrackObject } from "../../@types/types";
import SpotifyApiClient from "../SpotifyApiClient";
import Album from "./Album";
export default class Artist {
    private client;
    constructor(client: SpotifyApiClient);
    getArtist(artistId: string): Promise<SimplifiedArtistObject>;
    getArtists(artistIds: string[]): Promise<SimplifiedArtistObject[]>;
    getArtistAlbums(artistId: string): Promise<Album[]>;
    getArtistTopTracks(artistId: string): Promise<TrackObject[]>;
    getRelatedArtists(artistId: string): Promise<ArtistObject[]>;
}
//# sourceMappingURL=Artist.d.ts.map