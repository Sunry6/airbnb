import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionFooterWrapper from './style';
import IconMoreArrow from '@/assets/svg/icon-more-arrow';

const SectionFooter = memo((props) => {
	const { name } = props;
	const showMessage = name ? `显示更多${name}房源` : '显示全部';

	const navigate = useNavigate();

	function moreClickHandle() {
		navigate('/entire');
	}

	return (
		<SectionFooterWrapper color={name ? '#00848a' : '#000'}>
			<div className="info" onClick={moreClickHandle}>
				<span className="text">{showMessage}</span>
				<IconMoreArrow />
			</div>
		</SectionFooterWrapper>
	);
});

export default SectionFooter;
