import { getEntireRoomList } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchEntireDataAction = createAsyncThunk('fetchData', (payload, { dispatch, getState }) => {
	const currentPage = getState().entire.currentPage;
	dispatch(changeIsLoadingAction(true));
	getEntireRoomList(currentPage * 20).then((res) => {
		dispatch(changeRoomListAction(res.list));
		dispatch(changeTotalCountAction(res.totalCount));
		dispatch(changeIsLoadingAction(false));
	});
});

const entireSlice = createSlice({
	name: 'entire',
	initialState: {
		currentPage: 0,
		roomList: [],
		totalCount: 0,
		isLoading: false,
	},
	reducers: {
		changeCurrentPageAction(state, { payload }) {
			state.currentPage = payload;
		},
		changeRoomListAction(state, { payload }) {
			state.roomList = payload;
		},
		changeTotalCountAction(state, { payload }) {
			state.totalCount = payload;
		},
		changeIsLoadingAction(state, { payload }) {
			state.isLoading = payload;
		},
	},
});

export const {
	changeCurrentPageAction,
	changeRoomListAction,
	changeTotalCountAction,
	changeIsLoadingAction,
} = entireSlice.actions;

export { fetchEntireDataAction };

export default entireSlice.reducer;
