import styled from 'styled-components';

const ScrollViewWrapper = styled.div`
	overflow: hidden;
	position: relative;

	.scroll-content {
		display: flex;
		transition: transform 200ms ease;
	}
`;

export default ScrollViewWrapper;
