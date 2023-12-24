import SectionGoods from '@/components/SectionGoods';
import SectionHeader from '@/components/SectionHeader';
import React, { memo, useCallback, useState } from 'react';
import RecommendWrapper from './style';
import SectionTabs from '@/components/SectionTabs';

const Recommend = memo((props) => {
	const { recommendInfo } = props;
	const initialName = Object.keys(recommendInfo.dest_list)[0];
	const [name, setName] = useState(initialName);
	const tabNames = recommendInfo.dest_address?.map((item) => item.name);

	const tabClickHandle = useCallback(function (name) {
		setName(name);
	}, []);

	return (
		<RecommendWrapper className="Recommend content-item">
			<SectionHeader title={recommendInfo.title} subTitle={recommendInfo.subtitle} />
			<SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
			<SectionGoods itemWidth="33%" goodsList={recommendInfo.dest_list[name]} />
		</RecommendWrapper>
	);
});

export default Recommend;
