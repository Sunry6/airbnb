import PropTypes from 'prop-types';
import React, { memo } from 'react';
import GoodsItem from '../GoodsItem';
import SectionGoodsWrapper from './style';

const SectionGoods = memo((props) => {
	const { goodsList } = props;

	return (
		<SectionGoodsWrapper>
			{goodsList?.slice(0, 8)?.map((item) => {
				return <GoodsItem key={item.id} itemData={item} />;
			})}
		</SectionGoodsWrapper>
	);
});

SectionGoods.propTypes = {
	goodsList: PropTypes.array,
};

export default SectionGoods;
