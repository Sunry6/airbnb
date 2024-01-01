import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { PaginationWrapper } from './style';
import { useEntireState } from '../../hooks/useEntireState';
import { changeCurrentPageAction } from '@/model/modules/entire';
import Pagination from '@mui/material/Pagination';

const EntirePagination = memo(() => {
	const { currentPage, totalCount } = useEntireState();

	const totalPage = Math.ceil(totalCount / 20);
	const startCount = currentPage * 20 + 1;
	const endCount = (currentPage + 1) * 20;

	const dispatch = useDispatch();

	function pageChangeHandle(event, pageCount) {
		window.scrollTo(0, 0);
		dispatch(changeCurrentPageAction(pageCount - 1));
	}

	return (
		<PaginationWrapper>
			<div className="page-info">
				<Pagination count={totalPage} onChange={pageChangeHandle} />
				<div className="info">
					第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
				</div>
			</div>
		</PaginationWrapper>
	);
});

export default EntirePagination;
