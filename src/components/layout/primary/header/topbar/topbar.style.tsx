const styles = {
	topbar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: 50,
		padding: '20px 0 ',
		borderBottomWidth: 0,
		borderBottomStyle: 'solid',
		borderBottomColor: 'muted',
		backgroundColor: '#1d1d24',

		'@media only screen and (min-width: 1024px)': {
			'.container.fluid': {
				'.grid': {
					gridTemplateColumns: '1fr 3fr 1fr',
					'.topbar-search': {

						'label.search': {
							marginLeft: 'auto',
							marginRight: 'auto',
							maxWidth: '100%',
						},
					},
					'.topbar-links': {
						marginLeft: 'auto',
					},
				},
			},
		},
		'@media only screen and (max-width: 1024px)': {
			borderBottom: 0,
			boxShadow: '0 2px 4px rgba(41,41,41,0.06)',
		},
		'.logo a': {
			position: 'relative',
			marginTop: '6px',
			marginRight: '0px',
			'@media only screen and (max-width: 1024px)': {
				marginLeft: '0px',
				marginRight: '0',
			},

		},
	},
	grid: {
		gridGap: [10, 30, 40],
		alignItems: 'center',
		gridTemplateColumns: 'auto 1fr auto',
		'@media only screen and (max-width: 1024px)': {
			gridTemplateColumns: '1fr auto auto',
			display: 'flex',
			justifyContent: 'center',
		},
		'.topbar-search': {
			position: 'relative',
			maxWidth: '596px',
			margin: '0 auto',
			width: '100%', top: '4px',
			'@media only screen and (max-width: 1024px)': {
				display: 'none',
			},
			svg: {
				color: '#fff',
				top: '2px',
				position: 'relative',
				path: {
					fill: '#fff',
				}
			},
			button: {
				display: 'block',
				position: 'absolute',
				right: '0',
				top: '0',
				borderRadius: '0',
				height: '32px',
				minHeight: '32px',
				zIndex: '1', backgroundColor: '#f1a329', padding: '0',
			},
		},
		'.logo img': {
			'@media only screen and (max-width: 1024px)': {
				maxWidth: '165px',
			},
			'@media only screen and (max-width: 640px)': {
				maxWidth: '130px',
			},
		},
		'button[aria-label="Cart"]': {
			'@media only screen and (max-width: 1024px)': {
				minHeight: '36px',
			},
			'svg': {
				'@media only screen and (max-width: 1024px)': {
					width: '30px',
					height: '30px',
				},
			},
		},
		'.search': {
			display: 'flex',
			maxWidth: 598,
			marginLeft: 'auto',
			marginRight: 'auto',
			svg: {
				display: 'none',
			},
			label: {
				'&&:after': {
					content: '',
					background: '#f1a329',
					position: 'absolute',
					top: '0',
					left: '0'
				},

			},
			'@media only screen and (max-width: 1024px)': {
				display: 'none',
			},
		},
	},
	hamburgBtn: {
		display: 'none',
		'@media only screen and (max-width: 1024px)': {
			display: 'inline-flex',
			justifyContent: 'left',
			position: 'absolute',
			top: '0',
			left: '10px',
			minHeight: '36px',
		},
		'svg': {
			color: '#f1a329',
		},
	},
	'.drawer-left drawerTitle': {
		backgroundColor: 'transparent',
	},
	searchBtn: {
		display: 'none',
		svg: {
			width: 17.5,
			height: 17.5,
		},
		'@media only screen and (max-width: 1024px)': {
			display: 'inline-flex',
		},
	},
	rightPart: {
		display: 'flex',
		alignItems: 'center',
		'@media only screen and (max-width: 1024px)': {
			position: 'absolute',
			top: '0',
			right: '10px'
		},
		div: {
			marginTop: '2px',
		},
		a: {
			display: 'flex',
			color: 'primary',
			textDecoration: 'none',
			transition: 'color 0.2s',
			paddingRight: '15px',
			'@media only screen and (max-width: 768px)': {
				paddingRight: '0',
			},
			svg: {
				width: [20, 20],
				height: [20, 20],
				color: '#f1a329'
			},
			':hover': {
				color: 'menu',
			},
		},
	},
	drawerTitle: {
		maxWidth: 480,
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		paddingY: 15,
		paddingLeft: 30,
		paddingRight: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#d1bebe',
		zIndex: 10,
		h2: {
			color: 'primary',
			fontSize: 17,
		},
	} as React.CSSProperties,

	badge: {
		position: "absolute",
		backgroundColor: '#fff',
		color: 'rgb(18, 18, 18)',
		height: '17px',
		width: '17px',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '.9rem',
		top: '-2px',
		right: '-2px',
		lineHeight: '1.1'
	} as React.CSSProperties,
	st0: {
		fill: '#f1a329'
	},
	st1: {
		fill: '#B7B8BC'
	},
	st2: {
		fill: '#FFFFFF'
	},
	iconAccount: {

	}
};




export default styles;
