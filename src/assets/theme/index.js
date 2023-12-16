const theme = {
	color: {
		primary: '#FF385A',
		secondary: '#00848A',
	},

	textColor: {
		primary: '#484848',
		secondary: '#222222',
	},

	mixin: {
		boxShadow: `
      transition: box-shadow 200ms ease;
		  &:hover {
			  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		  }
    `,
	},
};

export default theme;
