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

export function getHomeDiscountData() {
	return ryanRequest.get({
		url: '/home/discount',
	});
}

export function getHomeRecommendData() {
	return ryanRequest.get({
		url: '/home/hotrecommenddest',
	});
}

export function getLongForData() {
	return ryanRequest.get({
		url: '/home/longfor',
	});
}

export function getHomePlusData() {
	return ryanRequest.get({
		url: '/home/plus',
	});
}
