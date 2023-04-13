export { 
  default as moviesReducer,
  fetchMovies, 
  fetchMovie
} from './slice';

export type {
  IMovie,
  IMovieError,
  IMoviePayload,
  IMovieState
} from "./types";