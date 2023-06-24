import React from 'react';
import HOMESVG from 'Shared/assets/icons/home.svg';

const linkColor = 'var(--side-bar-icon-color)';

export const HomeSVG: React.FC = () => {

	return (
		<HOMESVG  style={{ fill: linkColor }}/>
	);
};
