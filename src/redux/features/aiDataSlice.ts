import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryData = {
  category: string;
  queries: number;
};

type AIState = {
  categoryData: CategoryData[];
};

const initialState: AIState = {
  categoryData: [],
};
const aiDataSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {
    setCategoryData(state, action: PayloadAction<CategoryData[]>) {
      state.categoryData = action.payload;
    },
  },
});

export const { setCategoryData } = aiDataSlice.actions;
export default aiDataSlice.reducer;
