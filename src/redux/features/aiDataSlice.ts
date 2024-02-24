import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryData = {
  category: string;
  queries: number;
};

type ResponseTimesData = {
  date?: string;
  week?: string;
  average_time: number;
};

type AIState = {
  categoryData: CategoryData[];
  dayWiseData: ResponseTimesData[];
  weekWiseData: ResponseTimesData[];
};

const initialState: AIState = {
  categoryData: [],
  dayWiseData: [],
  weekWiseData: [],
};
const aiDataSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {
    setCategoryData(state, action: PayloadAction<CategoryData[]>) {
      state.categoryData = action.payload;
    },
    setDayWiseData(state, action: PayloadAction<ResponseTimesData[]>) {
      state.dayWiseData = action.payload;
    },
    setWeekWiseData(state, action: PayloadAction<ResponseTimesData[]>) {
      state.weekWiseData = action.payload;
    },
  },
});

export const { setCategoryData, setDayWiseData, setWeekWiseData } = aiDataSlice.actions;
export default aiDataSlice.reducer;
