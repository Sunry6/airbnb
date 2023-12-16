import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import HeaderLeft from './components/HeaderLeft';
import HeaderCenter from './components/HeaderCenter';
import HeaderRight from './components/HeaderRight';

const Header = memo(() => {
	return (
		<HeaderWrapper>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</HeaderWrapper>
	);
});

export default Header;
