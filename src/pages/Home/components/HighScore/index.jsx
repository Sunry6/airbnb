import PropTypes from 'prop-types';
import SectionGoods from '@/components/SectionGoods';
import SectionHeader from '@/components/SectionHeader';
import React, { memo } from 'react';
import HighScoreWrapper from './style';

const HighScoreSection = memo((props) => {
	const { highScoreInfo } = props;

	return (
		<HighScoreWrapper className="content-item high-score">
			<SectionHeader title={highScoreInfo?.title} subTitle={highScoreInfo?.subtitle} />
			<SectionGoods goodsList={highScoreInfo?.list} />
		</HighScoreWrapper>
	);
});

HighScoreSection.propTypes = {
	highScoreInfo: PropTypes.object,
};

export default HighScoreSection;
