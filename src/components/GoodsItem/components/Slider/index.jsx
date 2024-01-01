import React, { memo, useRef, useState } from 'react';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/atom/Indicator';
import classNames from 'classnames';
import SliderWrapper from './style';

const Slider = memo((props) => {
	const { itemData, itemClick } = props;
	const [selectIndex, setSelectIndex] = useState(0);
	const sliderRef = useRef();

	function controlClickHandle(isRight = true) {
		isRight ? sliderRef.current.next() : sliderRef.current.prev();

		let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
		const length = itemData.picture_url.length;
		if (newIndex < 0) newIndex = length - 1;
		if (newIndex > length - 1) newIndex = 0;
		setSelectIndex(newIndex);
	}

	function itemClickHandle() {
		itemClick && itemClick();
	}

	return (
		<SliderWrapper onClick={itemClickHandle}>
			<div className="slider">
				<div className="control">
					<div className="btn left" onClick={(e) => controlClickHandle(false)}>
						<IconArrowLeft width="30" height="30" />
					</div>
					<div className="btn right" onClick={(e) => controlClickHandle(true)}>
						<IconArrowRight width="30" height="30" />
					</div>
				</div>
				<div className="indicator">
					<Indicator selectIndex={selectIndex}>
						{itemData.picture_urls?.map((item, index) => {
							return (
								<div className="item" key={item}>
									<span className={classNames('dot', { active: selectIndex === index })}></span>
								</div>
							);
						})}
					</Indicator>
				</div>
				<Carousel dots={false} ref={sliderRef}>
					{itemData.picture_urls?.map((item) => {
						return (
							<div className="cover" key={item}>
								<img src={itemData.picture_url} alt="" />
							</div>
						);
					})}
				</Carousel>
			</div>
		</SliderWrapper>
	);
});

export default Slider;
