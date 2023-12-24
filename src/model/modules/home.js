import {
	getHomeDiscountData,
	getHomeGoodPriceData,
	getHomeHighScoreData,
	getHomeRecommendData,
} from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
	getHomeGoodPriceData().then((res) => {
		dispatch(changeGoodPriceInfoAction(res));
	});

	getHomeHighScoreData().then((res) => {
		dispatch(changeHighScoreInfoAction(res));
	});

	getHomeDiscountData().then((res) => {
		dispatch(changeDiscountInfoAction(res));
	});

	getHomeRecommendData().then((res) => {
		dispatch(changeRecommendInfoInfoAction(res));
	});
});

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo: {},
		recommendInfo: {},
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload;
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload;
		},
		changeDiscountInfoAction(state, { payload }) {
			state.discountInfo = payload;
		},
		changeRecommendInfoInfoAction(state, { payload }) {
			state.recommendInfo = payload;
		},
	},
});

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountInfoAction,
	changeRecommendInfoInfoAction,
} = homeSlice.actions;

export { fetchHomeDataAction };

export default homeSlice.reducer;
