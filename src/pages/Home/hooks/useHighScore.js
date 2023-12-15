import ryanRequest from '@/services';
import { useEffect, useState } from 'react';

export const useHighScore = () => {
	const [highScore, setHighScore] = useState({});

	useEffect(() => {
		const getData = () => {
			ryanRequest.get({ url: '/home/highscore' }).then(
				(res) => {
					setHighScore(res);
				},
				(err) => {
					throw new Error(err);
				}
			);
		};

		getData();
	}, []);

	return { highScore };
};
