import React, { memo } from 'react';
import { useHighScore } from '@/pages/Home/hooks/useHighScore';

const Home = memo((props) => {
	const { highScore } = useHighScore();

	return (
		<div>
			{highScore?.list?.map((item) => {
				return <div key={item.id}>{item.name}</div>;
			})}
		</div>
	);
});

export default Home;
