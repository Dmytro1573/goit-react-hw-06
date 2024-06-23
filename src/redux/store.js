import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const persistConfig = {
  key: "contacts",
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactReducer),
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
