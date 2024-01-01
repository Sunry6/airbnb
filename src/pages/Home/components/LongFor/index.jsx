import React, { memo } from 'react';
import LongForWrapper from './style';
import SectionHeader from '@/components/SectionHeader';
import LongForItem from '@/components/LongForItem';
import ScrollView from '@/atom/ScrollView';

const LongFor = memo((props) => {
	const { longForInfo } = props;

	return (
		<LongForWrapper>
			<SectionHeader title={longForInfo.title} subTitle={longForInfo.subtitle} />
			<div className="list">
				<ScrollView>
					{longForInfo.list.map((item) => {
						return <LongForItem key={item.city} itemData={item} />;
					})}
				</ScrollView>
			</div>
		</LongForWrapper>
	);
});

export default LongFor;
