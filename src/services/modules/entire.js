import ryanRequest from '..';

export function getEntireRoomList(offset = 0, size = 20) {
	return ryanRequest.get({
		url: '/entire/list',
		params: {
			offset,
			size,
		},
	});
}
