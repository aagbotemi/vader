import { combineReducers } from "@reduxjs/toolkit";

// REDUCERS
import { moviesReducer } from "./slices/movie";

const rootReducer = combineReducers({
    movies: moviesReducer,
});

export { rootReducer as default };
