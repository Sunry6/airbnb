import { useEffect, useRef, useState } from 'react';

const useScroll = (props) => {
	const [showRight, setShowRight] = useState(false);
	const [showLeft, setShowLeft] = useState(false);
	const [positionIndex, setPositionIndex] = useState(0);
	const scrollContentRef = useRef();
	const totalDistanceRef = useRef();

	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
		const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
		const totalDistance = scrollWidth - clientWidth;
		totalDistanceRef.current = totalDistance;
		setShowRight(totalDistance > 0);
	}, []);

	function controlClickHandle(isRight) {
		const newIndex = isRight ? positionIndex + 1 : positionIndex - 1;
		const newEl = scrollContentRef.current.children[newIndex];
		const newOffsetLeft = newEl.offsetLeft;
		scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
		setPositionIndex(newIndex);
		// 是否继续显示右侧的按钮
		setShowRight(totalDistanceRef.current > newOffsetLeft);
		setShowLeft(newOffsetLeft > 0);
	}

	return { controlClickHandle, scrollContentRef, showRight, showLeft };
};

export default useScroll;
