import React, { memo } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './components/HomeBanner';
import { useHomeState } from './hooks/useHomeState';
import HighScoreSection from './components/HighScore';
import GoodPriceSection from './components/GoodPrice';
import Discount from './components/Discount';
import { isEmptyObject } from '@/utils';
import Recommend from './components/Recommend';
import LongFor from './components/LongFor';
import Plus from './components/Plus';

const Home = memo(() => {
	const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } =
		useHomeState();

	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				{isEmptyObject(discountInfo) && <Discount discountInfo={discountInfo} />}
				{isEmptyObject(recommendInfo) && <Recommend recommendInfo={recommendInfo} />}
				{isEmptyObject(longForInfo) && <LongFor longForInfo={longForInfo} />}
				{isEmptyObject(highScoreInfo) && <HighScoreSection highScoreInfo={highScoreInfo} />}
				{isEmptyObject(goodPriceInfo) && <GoodPriceSection goodPriceInfo={goodPriceInfo} />}
				{isEmptyObject(plusInfo) && <Plus infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	);
});

export default Home;
