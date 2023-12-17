import ryanRequest from '..';

export function getHomeGoodPriceData() {
	return ryanRequest.get({
		url: '/home/goodprice',
	});
}

export function getHomeHighScoreData() {
	return ryanRequest.get({
		url: '/home/highscore',
	});
}
