import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../types";
import { InitialStateTypes } from "./types";

export const initialState: InitialStateTypes = {
  title: "",
  description: "",
  date: "",
  time: "",
  place: "",
  bgaProfile: "",
  boardgamegreek: "",
  collectionGames: [],
  nightGames: [],
  friends: [],
};

export const gameSetupSlice = createSlice({
  name: "gameSetup",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<InitialStateTypes | undefined>) => {
      if (!action.payload) {
        return state;
      }

      return { ...state, ...action.payload };
    },
  },
});

export const { addData } = gameSetupSlice.actions;

export const gameSetupSelectors = {
  gameSetup: (state: RootState) => state.gameSetup,
};

export default gameSetupSlice.reducer;

export * from "./types";
