import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';

// API SERVICE
import { $api } from '../../../services';
import { IMovieError, IMoviePayload, IMovieState, IMovieDetailPayload, IMovieCastPayload } from './types';

const initialState: IMovieState = {
    loading: false,
    payload: {} as IMoviePayload,
    payload_detail: {} as IMovieDetailPayload,
    payload_cast: {} as Array<IMovieCastPayload>,
    error: { message: 'An error occurred, please try again!' },
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },

        setPayload: (state, { payload }: PayloadAction<IMoviePayload>) => {
            state.payload = payload;
        },

        setDetailPayload: (state, { payload }: PayloadAction<IMovieDetailPayload>) => {
            state.payload_detail = payload;
        },

        setCastPayload: (state, { payload }: PayloadAction<Array<IMovieCastPayload>>) => {
            state.payload_cast = payload;
        },

        setError: (state, { payload }: PayloadAction<IMovieError>) => {
            state.error = payload;
        },
    },
});

export const fetchMovies = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await $api.service().fetch(`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`, false);

    if (!response?.data) {
        dispatch(setLoading(false));
        // dispatch(setError({message: ''}));
        console.log("RESPONSES: ", { response });
    }

    console.log("RESPONSE: ", { response });
    dispatch(setPayload(response?.data));
    dispatch(setLoading(false));
};

export const fetchMovie = (movie_id: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await $api.service().fetch(`/movie/${movie_id}?api_key=${import.meta.env.VITE_API_KEY}`, false);
    const castResponse = await $api.service().fetch(`/movie/${movie_id}/credits?api_key=${import.meta.env.VITE_API_KEY}`, false);

    if (!response?.data) {
        dispatch(setLoading(false));
        // dispatch(setError({message: ''}));
        console.log({ response });
    }

    console.log("RESPONSE: ", { response });
    dispatch(setDetailPayload(response?.data));
    dispatch(setCastPayload(castResponse?.data?.cast))
    dispatch(setLoading(false));
};


const moviesReducer = movieSlice.reducer;
export const { setError, setLoading, setPayload, setDetailPayload, setCastPayload } = movieSlice.actions;
export { moviesReducer as default };