import React, { memo } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './components/HomeBanner';

const Home = memo((props) => {
	return (
		<HomeWrapper>
			<HomeBanner />
		</HomeWrapper>
	);
});

export default Home;
