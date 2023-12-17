import SectionGoods from '@/components/SectionGoods';
import SectionHeader from '@/components/SectionHeader';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import GoodPriceWrapper from './style';

const GoodPriceSection = memo((props) => {
	const { goodPriceInfo } = props;

	return (
		<GoodPriceWrapper className="content-item good-price">
			<SectionHeader title={goodPriceInfo?.title} />
			<SectionGoods goodsList={goodPriceInfo?.list} />
		</GoodPriceWrapper>
	);
});

GoodPriceSection.propTypes = {
	goodPriceInfo: PropTypes.object,
};

export default GoodPriceSection;
