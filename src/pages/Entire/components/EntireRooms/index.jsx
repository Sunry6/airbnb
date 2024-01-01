import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RoomsWrapper } from './style';
import GoodsItem from '@/components/GoodsItem';
import { changeDetailInfoAction } from '@/model/modules/detail';

const EntireRooms = memo((props) => {
	const { roomList, totalCount, isLoading } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const itemClickHandle = useCallback(
		(item) => {
			dispatch(changeDetailInfoAction(item));
			navigate('/detail');
		},
		[dispatch, navigate]
	);

	return (
		<RoomsWrapper>
			<h2>共{totalCount}多处住所</h2>
			<div className="list">
				{roomList.map((item) => {
					return (
						<GoodsItem
							itemData={item}
							itemWidth="20%"
							key={item.id}
							itemClick={(e) => itemClickHandle(item)}
						/>
					);
				})}
			</div>
			{isLoading && <div className="cover"></div>}
		</RoomsWrapper>
	);
});

export default EntireRooms;
