export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    release_dates: any
}

export interface IMoviePayload {
    page: number;
    results: Array<IMovie>;
    total_pages: number;
    total_results: number;
}

export interface IMovieError {
    message: any;
}

export interface IGenres {
    id: number,
    name: string,
}

export interface IProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string
}

export interface IProductionCountry {
    iso_3166_1: number;
    name: string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IMovieDetailPayload {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string | null | any;
    budget: number;
    genres: Array<IGenres>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<IProductionCompany>
    production_countries: Array<IProductionCountry>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<ISpokenLanguage>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieCastPayload {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: string;
    original_name: string;
    popularity: number
    profile_path: string
}

export interface IMovieState {
    loading: boolean;
    error: IMovieError;
    payload: IMoviePayload;
    payload_detail: IMovieDetailPayload;
    payload_cast: Array<IMovieCastPayload>;
}