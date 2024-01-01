import React, { memo } from 'react';
import PlusWrapper from './style';
import SectionHeader from '@/components/SectionHeader';
import GoodsItem from '@/components/GoodsItem';
import ScrollView from '@/atom/ScrollView';
import SectionFooter from '@/components/SectionFooter';

const Plus = memo((props) => {
	const { infoData } = props;

	return (
		<PlusWrapper>
			<SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
			<div className="good-list">
				<ScrollView>
					{infoData.list.map((item) => {
						return <GoodsItem itemData={item} key={item.id} />;
					})}
				</ScrollView>
			</div>
			<SectionFooter name="plus" />
		</PlusWrapper>
	);
});

export default Plus;
