import { fetchEntireDataAction } from '@/model/modules/entire';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const useEntireState = () => {
	const dispatch = useDispatch();
	const state = useSelector(
		(state) => ({
			currentPage: state.entire.currentPage,
			roomList: state.entire.roomList,
			totalCount: state.entire.totalCount,
			isLoading: state.entire.isLoading,
		}),
		shallowEqual
	);

	useEffect(() => {
		dispatch(fetchEntireDataAction());
	}, [dispatch, state.currentPage]);

	return state;
};
