import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type EmptyState = {
  emptyBoxShown: boolean;
  toUserID: string | undefined;
};

const slice = createSlice({
  name: "empty",
  initialState: { emptyBoxShown: false, toUserID: undefined } as EmptyState,
  reducers: {},
});

export const selectEmptyBoxShown = (state: RootState) =>
  state.empty.emptyBoxShown;
export const selectToUserID = (state: RootState) => state.empty.toUserID;

export default slice.reducer;
