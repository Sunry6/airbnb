import { fetchHomeDataAction } from '@/model/modules/home';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const useHomeState = () => {
	const dispatch = useDispatch();
	const state = useSelector(
		(state) => ({
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			discountInfo: state.home.discountInfo,
			recommendInfo: state.home.recommendInfo,
		}),
		shallowEqual
	);

	useEffect(() => {
		dispatch(fetchHomeDataAction());
	}, [dispatch]);

	return state;
};
