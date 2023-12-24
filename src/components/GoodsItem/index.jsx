import PropTypes from 'prop-types';
import React, { memo } from 'react';
import GoodsItemWrapper from './style';
import { Rating } from '@mui/material';

const GoodsItem = memo((props) => {
	const { itemData, itemWidth = '25%' } = props;

	return (
		<GoodsItemWrapper
			itemWidth={itemWidth}
			verifyColor={itemData.verify_info?.text_color || '#39576a'}
		>
			<div className="inner">
				<div className="cover">
					<img src={itemData.picture_url} alt="" />
				</div>
				<div className="desc">{itemData.verify_info?.messages.join(' · ')}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">{itemData.price}</div>

				<div className="bottom">
					<Rating
						value={itemData.star_rating ?? 4.5}
						precision={0.1}
						readOnly
						sx={{ fontSize: '12px', color: '#00848A' }}
					/>
					<span className="count">{itemData.reviews_count}</span>
					<span className="extra">·{itemData.bottom_info?.content ?? '超赞房东'}</span>
				</div>
			</div>
		</GoodsItemWrapper>
	);
});

GoodsItem.propTypes = {
	itemData: PropTypes.object,
};

export default GoodsItem;
