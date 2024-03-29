import styled from 'styled-components';

const GoodsItemWrapper = styled.li`
	flex-shrink: 0;
	box-sizing: border-box;
	width: ${(props) => props.itemWidth};
	padding: 8px;

	.inner {
		width: 100%;
	}

	.cover {
		position: relative;
		box-sizing: border-box;
		padding: 66.66% 8px 0;
		border-radius: 3px;
		overflow: hidden;

		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.desc {
		margin: 10px 0 5px;
		font-style: 12px;
		font-weight: 700;
		color: ${(props) => props.verifyColor};
	}

	.name {
		font-size: 16px;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.price {
		margin: 8px 0;
	}

	.bottom {
		display: flex;
		align-items: center;
		font-style: 12px;
		font-weight: 600;
		color: ${(props) => props.theme.textColor.primary};

		.count {
			margin: 0 2px 0 4px;
		}

		.MuiRating-icon {
			margin-right: -2px;
		}
	}
`;

export default GoodsItemWrapper;
