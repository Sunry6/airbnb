import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import DetailPictures from './components/DetailPictures';
import { DetailWrapper } from './style';
import { changeHeaderConfigAction } from '@/model/modules/main';

const Detail = memo((props) => {
	const { detailInfo } = useSelector(
		(state) => ({
			detailInfo: state.detail.detailInfo,
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }));
	}, [dispatch]);

	return (
		<DetailWrapper>
			<DetailPictures pictureUrls={detailInfo.picture_urls} />
		</DetailWrapper>
	);
});

Detail.propTypes = {};

export default Detail;
