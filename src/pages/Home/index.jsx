import React, { memo } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './components/HomeBanner';
import { useHomeState } from './hooks/useHomeState';
import HighScoreSection from './components/HighScore';
import GoodPriceSection from './components/GoodPrice';

const Home = memo(() => {
	const { goodPriceInfo, highScoreInfo } = useHomeState();

	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				<HighScoreSection highScoreInfo={highScoreInfo} />
				<GoodPriceSection goodPriceInfo={goodPriceInfo} />
			</div>
		</HomeWrapper>
	);
});

export default Home;
