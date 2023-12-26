import React, { memo, useEffect, useRef, useState } from 'react';
import ScrollViewWrapper from './style';

const ScrollView = memo((props) => {
	const { children } = props;
	const [showRight, setShowRight] = useState(false);
	const [positionIndex, setPositionIndex] = useState(0);
	const scrollContentRef = useRef();
	const totalDistanceRef = useRef();

	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth;
		const clientWidth = scrollContentRef.current.clientWidth;
		const totalDistance = scrollWidth - clientWidth;
		console.log(scrollWidth, clientWidth);
		totalDistanceRef.current = totalDistance;
		setShowRight(totalDistance > 0);
	}, [props.children]);

	const rightClickHandle = () => {
		const newIndex = positionIndex + 1;
		const newEl = scrollContentRef.current.children[newIndex];
		const newElOffsetLeft = newEl.offsetLeft;
		scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
		setPositionIndex(newIndex);
		// 是否继续显示右边的按钮
		console.log(totalDistanceRef.current, newElOffsetLeft);
		setShowRight(totalDistanceRef.current > newElOffsetLeft);
	};

	return (
		<ScrollViewWrapper>
			<button className="left-button">左侧按钮</button>
			{showRight && (
				<button className="right-button" onClick={rightClickHandle}>
					右侧按钮
				</button>
			)}
			<div className="scroll-content" ref={scrollContentRef}>
				{children}
			</div>
		</ScrollViewWrapper>
	);
});

export default ScrollView;
