import React, { memo } from 'react';
import ScrollViewWrapper from './style';
import useScroll from './hooks/useScroll';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
	const { controlClickHandle, scrollContentRef, showRight, showLeft } = useScroll();

	return (
		<ScrollViewWrapper>
			{showLeft && (
				<div
					className="control left"
					onClick={() => {
						controlClickHandle(false);
					}}
				>
					<IconArrowLeft />
				</div>
			)}
			{showRight && (
				<div
					className="control right"
					onClick={() => {
						controlClickHandle(true);
					}}
				>
					<IconArrowRight />
				</div>
			)}
			<div className="scroll">
				<div className="scroll-content" ref={scrollContentRef}>
					{props?.children}
				</div>
			</div>
		</ScrollViewWrapper>
	);
});

export default ScrollView;
