import React, { memo } from 'react';
import { RightWrapper } from './style';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import IconAvatar from '@/assets/svg/icon_avatar';
import { useShowPanel } from './hooks/useShowPanel';

const HeaderRight = memo(() => {
	const { showPanel, setShowPanel } = useShowPanel();

	const renderPanel = () => {
		return (
			<div className="panel">
				<div className="top">
					<div className="panel-item register">注册</div>
					<div className="panel-item login">登录</div>
				</div>
				<div className="bottom">
					<div className="panel-item">出租房源</div>
					<div className="panel-item">开展体验</div>
					<div className="panel-item">帮助</div>
				</div>
			</div>
		);
	};

	return (
		<RightWrapper>
			<div className="btn-group">
				<span className="btn">登录</span>
				<span className="btn">注册</span>
				<span className="btn">
					<IconGlobal />
				</span>
			</div>

			<div
				className="profile"
				onClick={() => {
					setShowPanel(true);
				}}
			>
				<IconMenu />
				<IconAvatar />
				{showPanel && renderPanel()}
			</div>
		</RightWrapper>
	);
});

export default HeaderRight;
