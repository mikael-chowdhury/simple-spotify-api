declare class Album {
    private client;
    constructor(client: SpotifyApiClient);
    getAlbum(albumId: string): Promise<AlbumObject>;
    getAlbums(albumIds: string[]): Promise<AlbumObject[]>;
    getAlbumTracks(albumId: string): Promise<SpotifyList<SimplifiedTrackObject>>;
    getNewReleases(): Promise<AlbumObject[]>;
}

declare type AlbumObject = {
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    available_markets: string[];
    external_urls: {
        spotify: "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I";
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    type: "album";
    uri: string;
    artists: SimplifiedArtistObject[];
    tracks: SpotifyList<SimplifiedTrackObject>;
    copyrights: {
        text: string;
        type: "C" | "P";
    }[];
    external_ids: {
        upc: "886447227169";
    };
    genres: string[];
    label: string;
    popularity: number;
};

declare class ApiHelper {
    private client;
    private accessToken;
    private clientKey;
    private clientSecret;
    constructor(client: SpotifyApiClient, clientKey: string, clientSecret: string);
    getAccessToken(): Promise<string>;
    static API_BASE: string;
    get(path: string): Promise<unknown>;
}

declare interface ApiOptions_2 {
    clientKey: string;
    clientSecret: string;
}

declare class Artist {
    private client;
    constructor(client: SpotifyApiClient);
    getArtist(artistId: string): Promise<SimplifiedArtistObject>;
    getArtists(artistIds: string[]): Promise<SimplifiedArtistObject[]>;
    getArtistAlbums(artistId: string): Promise<Album[]>;
    getArtistTopTracks(artistId: string): Promise<TrackObject[]>;
    getRelatedArtists(artistId: string): Promise<ArtistObject[]>;
}

declare interface ArtistObject {
    external_urls: Object[];
    followers: {
        href: string | null;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage_2[];
    name: string;
    popularity: number;
    type: "artist";
    uri: string;
}

declare interface AudioAnalysisObject {
    meta: {
        analyzer_version: string;
        platform: string;
        detailed_status: string;
        status_code: number;
        timestamp: number;
        analysis_time: number;
        input_process: string;
    };
    track: {
        num_samples: number;
        duration: number;
        sample_md5: string;
        offset_seconds: number;
        window_seconds: number;
        analysis_sample_rate: number;
        analysis_channels: number;
        end_of_fade_in: number;
        start_of_fade_out: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        codestring: string;
        code_version: number;
        echoprintstring: string;
        echoprint_version: number;
        synch_version: number;
        rhythmstring: string;
        rhythm_version: number;
    };
    bars: {
        start: number;
        duration: number;
        confidence: number;
    }[];
    beats: {
        start: number;
        duration: number;
        confidence: number;
    }[];
    sections: {
        start: number;
        duration: number;
        confidence: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
    }[];
    segments: {
        start: number;
        duration: number;
        confidence: number;
        loudness_start: number;
        loudness_max: number;
        loudness_max_time: number;
        loudness_end: number;
        pitches: number[];
        timbre: number[];
    }[];
    tatums: {
        start: number;
        duration: number;
        confidence: number;
    }[];
}

declare class Audiobook {
    private client;
    constructor(client: SpotifyApiClient);
    getAudiobook(audiobookId: string): Promise<AudiobookObject>;
    getAudiobooks(audiobookIds: string[]): Promise<AudiobookObject[]>;
    getAudiobookChapters(audiobookId: string): Promise<SpotifyList<SimplifiedChapterObject>>;
    getChapter(chapterId: string): Promise<SimplifiedChapterObject>;
    getChapters(chapterIds: string[]): Promise<SimplifiedChapterObject[]>;
}

declare interface AudiobookObject {
    authors: {
        name: string;
    }[];
    available_markets: string[];
    description: string;
    html_description: string;
    edition: string;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    images: SpotifyImage_2[];
    languages: string[];
    mediaType: string;
    narrators: {
        name: string;
    }[];
    publisher: string;
    type: "audiobook";
    uri: string;
    total_chapters: number;
    chapters: SpotifyList<SimplifiedChapterObject>;
}

declare interface AudioFeaturesObject {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: string;
    uri: string;
    valence: number;
}

declare class Categories {
    private client;
    constructor(client: SpotifyApiClient);
    getBrowseCategories(): Promise<SpotifyList<CategoryObject>>;
    getBrowseCategory(categoryId: string): Promise<CategoryObject>;
}

declare interface CategoryObject {
    href: string;
    icons: SpotifyImage_2[];
    id: string;
    name: string;
}

declare class Genre {
    private client;
    constructor(client: SpotifyApiClient);
    getAvailableGenreSeeds(): Promise<string[]>;
}

declare class Playlist {
    private client;
    constructor(client: SpotifyApiClient);
    getPlaylist(playlistId: string): Promise<PlaylistObject>;
    getFeaturedPlaylists(): Promise<{
        message: string;
        playlists: SpotifyList<SimplifiedPlaylistObject>;
    }>;
    getCategoryPlaylists(categoryId: string): Promise<{
        message: string;
        playlists: SpotifyList<SimplifiedPlaylistObject>;
    }>;
    getPlaylistCoverImage(playlistId: string): Promise<SpotifyImage_2[]>;
}

declare interface PlaylistObject {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    name: string;
    owner: UserProfile;
    public: boolean;
    snapshot_id: string;
    tracks: SpotifyList<PlaylistTrackObject>;
    type: "playlist";
    uri: string;
}

declare interface PlaylistTrackObject {
    added_at: string;
    added_by: UserProfile;
    is_local: boolean;
    track: TrackObject;
}

declare interface RecommendationSeedObject {
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string;
    id: string;
    initialPoolSize: number;
    type: string;
}

declare class Search {
    private client;
    constructor(client: SpotifyApiClient);
    searchAlbums(query: string): Promise<{
        albums: SpotifyList<SimplifiedAlbumObject>;
    }>;
    searchArtists(query: string): Promise<{
        artists: SpotifyList<SimplifiedArtistObject>;
    }>;
    searchTracks(query: string): Promise<{
        tracks: SpotifyList<SimplifiedTrackObject>;
    }>;
    searchPlaylists(query: string): Promise<{
        playlists: SpotifyList<SimplifiedPlaylistObject>;
    }>;
    searchAudiobooks(query: string): Promise<{
        audiobooks: SpotifyList<SimplifiedAudiobookObject>;
    }>;
}

declare interface SimplifiedAlbumObject {
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions: {
        reason: "market" | "product" | "explicit";
    };
    type: string;
    uri: string;
    artists: SimplifiedArtistObject[];
}

declare interface SimplifiedArtistObject {
    external_urls: Object[];
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
}

declare interface SimplifiedAudiobookObject {
    authors: {
        name: string;
    }[];
    available_markets: string[];
    copyrights: {
        text: string;
        type: string;
    };
    description: string;
    html_description: string;
    edition: string;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    images: SpotifyImage_2[];
    languages: string[];
    mediaType: string;
    narrators: {
        name: string;
    }[];
    publisher: string;
    type: "audiobook";
    uri: string;
    total_chapters: number;
}

declare interface SimplifiedChapterObject {
    audio_preview_url: string;
    available_markets: string[];
    chapter_number: number;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    is_playable: boolean;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    type: "episode";
    uri: string;
    restrictions: {
        reason: "market" | "product" | "explicit";
    };
}

declare interface SimplifiedPlaylistObject {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    name: string;
    owner: UserProfile;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}

declare interface SimplifiedTrackObject {
    artists: SimplifiedArtistObject[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    restrictions: {
        reason: "market" | "product" | "explicit";
    };
    name: string;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: string;
    is_local: boolean;
}

export declare class SpotifyApiClient {
    private clientKey;
    private clientSecret;
    album: Album;
    artist: Artist;
    audiobook: Audiobook;
    categories: Categories;
    genre: Genre;
    playlist: Playlist;
    search: Search;
    track: Track;
    user: User;
    apiHelper: ApiHelper;
    constructor(apiOptions: ApiOptions_2);
    getAccessToken(): Promise<string>;
}

declare interface SpotifyImage_2 {
    url: string;
    height: number;
    width: number;
}

declare interface SpotifyList<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

declare class Track {
    private client;
    constructor(client: SpotifyApiClient);
    getTrack(trackId: string): Promise<TrackObject>;
    getTracks(trackIds: string[]): Promise<TrackObject[]>;
    getAudioFeatures(trackId: string): Promise<AudioFeaturesObject>;
    getSeveralAudioFeatures(trackIds: AudioFeaturesObject[]): Promise<AudioFeaturesObject[]>;
    getAudioAnalysis(trackId: string): Promise<AudioAnalysisObject>;
    getRecommendations(options: {
        seed_tracks: string[];
        seed_artists?: string[];
        seed_genres?: string[];
    }): Promise<{
        seeds: RecommendationSeedObject[];
        tracks: SpotifyList<TrackObject>;
    }>;
}

declare interface TrackObject {
    album: AlbumObject;
    artists: SimplifiedArtistObject[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
        ean: string;
        upc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    restrictions: {
        reason: "market" | "product" | "explicit";
    };
    name: string;
    pupularity: number;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: string;
    is_local: boolean;
}

declare class User {
    private client;
    constructor(client: SpotifyApiClient);
    getUserProfile(userId: string): Promise<UserProfile>;
    checkIfUserFollowsPlaylist(playlistId: string, userId: string): Promise<boolean>;
}

declare interface UserProfile {
    display_name: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    href: string;
    id: string;
    images: SpotifyImage_2[];
    type: string;
    uri: string;
}

export { }
