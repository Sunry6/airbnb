import { useEffect, useState } from 'react';

export const useShowPanel = () => {
	const [showPanel, setShowPanel] = useState(false);

	useEffect(() => {
		function windowHandleClick() {
			setShowPanel(false);
		}

		window.addEventListener('click', windowHandleClick, true);

		return () => {
			window.removeEventListener('click', windowHandleClick);
		};
	}, []);
	return { showPanel, setShowPanel };
};
