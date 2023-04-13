import {
  configureStore,
  Action,
  ThunkDispatch,
  CombinedState,
  AnyAction,
  EmptyObject,
  Dispatch,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ThunkAction } from "redux-thunk";

// STATE PERSIST
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PAUSE,
  PERSIST,
} from "redux-persist";
import storage from "./storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// REDUCERS
import { default as reducer } from "./rootReducer";
import { CombinedRootState } from "./slices/combined-state";

const devMode = process.env.NODE_ENV === "development";

const persistConfig = {
  key: "vader",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer as any);

const store = configureStore({
  reducer: persistedReducer,
  // reducer: persistReducer(persistConfig, reducer as any),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    devMode
      ? getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
        },
      }).concat(logger)
      : getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
        },
      }),
});

export const persistor = persistStore(store);

export type RootState = EmptyObject & CombinedRootState;
export type AppDispatch = ThunkDispatch<
  CombinedState<CombinedRootState>,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export { store as default };

