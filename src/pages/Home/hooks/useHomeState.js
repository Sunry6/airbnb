import { fetchHomeDataAction } from '@/model/modules/home';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const useHomeState = () => {
	const dispatch = useDispatch();
	const state = useSelector(
		(state) => ({
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
		}),
		shallowEqual
	);

	useEffect(() => {
		dispatch(fetchHomeDataAction());
	}, [dispatch]);

	const { goodPriceInfo, highScoreInfo } = state;
	return { goodPriceInfo, highScoreInfo };
};
