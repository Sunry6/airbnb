import {
	getHomeDiscountData,
	getHomeGoodPriceData,
	getHomeHighScoreData,
	getHomePlusData,
	getHomeRecommendData,
	getLongForData,
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
		dispatch(changeRecommendInfoAction(res));
	});

	getLongForData().then((res) => {
		dispatch(changeLongForInfoAction(res));
	});

	getHomePlusData().then((res) => {
		dispatch(changePlusInfoAction(res));
	});
});

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo: {},
		recommendInfo: {},
		longForInfo: {},
		plusInfo: {},
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
		changeRecommendInfoAction(state, { payload }) {
			state.recommendInfo = payload;
		},
		changeLongForInfoAction(state, { payload }) {
			state.longForInfo = payload;
		},
		changePlusInfoAction(state, { payload }) {
			state.plusInfo = payload;
		},
	},
});

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountInfoAction,
	changeRecommendInfoAction,
	changeLongForInfoAction,
	changePlusInfoAction,
} = homeSlice.actions;

export { fetchHomeDataAction };

export default homeSlice.reducer;
