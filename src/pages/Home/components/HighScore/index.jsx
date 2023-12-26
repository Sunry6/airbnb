import PropTypes from 'prop-types';
import SectionGoods from '@/components/SectionGoods';
import SectionHeader from '@/components/SectionHeader';
import React, { memo } from 'react';
import HighScoreWrapper from './style';
import SectionFooter from '@/components/SectionFooter';

const HighScoreSection = memo((props) => {
	const { highScoreInfo } = props;

	return (
		<HighScoreWrapper className="content-item high-score">
			<SectionHeader title={highScoreInfo?.title} subTitle={highScoreInfo?.subtitle} />
			<SectionGoods goodsList={highScoreInfo?.list} />
			<SectionFooter />
		</HighScoreWrapper>
	);
});

HighScoreSection.propTypes = {
	highScoreInfo: PropTypes.object,
};

export default HighScoreSection;
