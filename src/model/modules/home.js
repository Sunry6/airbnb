import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
	getHomeGoodPriceData().then((res) => {
		dispatch(changeGoodPriceInfoAction(res));
	});

	getHomeHighScoreData().then((res) => {
		dispatch(changeHighScoreInfoAction(res));
	});
});

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload;
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload;
		},
	},
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;

export { fetchHomeDataAction };

export default homeSlice.reducer;
