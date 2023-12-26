import SectionGoods from '@/components/SectionGoods';
import SectionHeader from '@/components/SectionHeader';
import React, { memo, useCallback, useState } from 'react';
import DiscountWrapper from './style';
import SectionTabs from '@/components/SectionTabs';
import SectionFooter from '@/components/SectionFooter';

const Discount = memo((props) => {
	const { discountInfo } = props;
	const initialName = Object.keys(discountInfo.dest_list)[0];
	const [name, setName] = useState(initialName);
	const tabNames = discountInfo.dest_address?.map((item) => item.name);

	const tabClickHandle = useCallback(function (name) {
		setName(name);
	}, []);

	return (
		<DiscountWrapper className="discount content-item">
			<SectionHeader title={discountInfo.title} subTitle={discountInfo.subtitle} />
			<SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
			<SectionGoods itemWidth="33%" goodsList={discountInfo.dest_list[name]} />
			<SectionFooter name={name} />
		</DiscountWrapper>
	);
});

export default Discount;
