import React, { memo, useState } from 'react';
import cls from 'classnames';
import { SectionTabsWrapper } from './style';
import ScrollView from '@/atom/ScrollView';

const SectionTabs = memo((props) => {
	const { tabNames = [], tabClick } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	const itemClickHandle = (index, name) => {
		setCurrentIndex(index);
		tabClick(name);
	};

	return (
		<SectionTabsWrapper>
			<ScrollView>
				{tabNames?.map((item, index) => {
					return (
						<div
							key={item}
							className={cls('item', { active: index === currentIndex })}
							onClick={() => itemClickHandle(index, item)}
						>
							{item}
						</div>
					);
				})}
			</ScrollView>
		</SectionTabsWrapper>
	);
});

export default SectionTabs;
