import React, { memo } from 'react';
import { EntireWrapper } from './style';
import EntireFilter from './components/EntireFilter';
import EntireRooms from './components/EntireRooms';
import EntirePagination from './components/EntirePagination';
import { useEntireState } from './hooks/useEntireState';
import { isEmptyObject } from '@/utils';

const Entire = memo(() => {
	const { roomList, totalCount, isLoading } = useEntireState();

	return (
		<EntireWrapper>
			<EntireFilter />
			{isEmptyObject(roomList) && (
				<EntireRooms roomList={roomList} totalCount={totalCount} isLoading={isLoading} />
			)}
			<EntirePagination />
		</EntireWrapper>
	);
});

export default Entire;
