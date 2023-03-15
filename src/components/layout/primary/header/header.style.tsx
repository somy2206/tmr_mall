const styles = {
	header: {
		backgroundColor: '#1d1d24',
		paddingTop: '20px',
		paddingBottom: '20px',
		'@media only screen and (max-width: 1024px)': {
			boxShadow: '0 2px 4px rgba(41, 41, 41, 0.06)',
			paddingTop: '10px',
			paddingBottom: '10px',
		},
		'.container': {
			'@media only screen and (max-width: 1024px)': {
				paddingLeft: '10px',
				paddingRight: '10px',
				position: 'relative',

			},
		},
		nav: {
			backgroundColor: '#1d1d24',
			'.logo': {
				opacity: 0,
				visibility: 'hidden',
				transform: 'translate3d(0, -20px, 0)',
				width: 0,
				transition: 'all 0.25s ease',
				img: {
					width: 250,
				},
			},
			'.rightPart': {
				width: 0,
				opacity: 0,
				visibility: 'hidden',
				marginTop: -20,
				display: 'none',
				transition: 'opacity 0.2s ease, margin-top 0.2s ease',
				'.search + div': {
					marginTop: '0',
					borderTopWidth: 1,
					borderTopStyle: 'solid',
					borderTopColor: 'muted',
					position: 'fixed',
					height: 'calc(100vh - 60px)',
					minHeight: 'calc(100vh - 60px)',
					overflow: 'auto',
					top: 60,
					paddingBottom: 150,
				},
			},
			'.mainMenu': {
				backgroundColor: '#4a4a4a',
				transition: 'padding 0.25s ease',
			},
		},
		'.sticky-outer-wrapper.active .sticky-inner-wrapper': {
			backgroundColor: '#1d1d24',
			paddingTop: '20px',
			paddingBottom: '20px',
			'@media only screen and (max-width: 1024px)': {
				paddingTop: '10px',
				paddingBottom: '10px',
			},
			nav: {
				'.logo': {
					opacity: 1,
					visibility: 'visible',
					width: 'auto',
					transform: 'translate3d(0, 0, 0)',
					padding: '10px 0',
				},
				'.rightPart': {
					width: 'auto',
					opacity: 1,
					visibility: 'visible',
					marginTop: 0,
				},
				'.mainMenu': {
					paddingX: 30, marginBottom: '20px'
				},
				'.activeSearch': {
					'.mainMenu': {
						display: 'none',
					},
					'.rightPart': {
						width: '90%',
						'> div': {
							width: '100%',
						},
					},
				},
			},
		},
	},

	showOnlyDesktop: {
		display: 'none',
		'@media only screen and (min-width: 1081px)': {
			display: 'block',
			'&.isSearchedActive.isNoticeActive': {
				'.picksySearch': {
					'.searchResult': {
						top: 115,
						height: 'calc(100vh - 115px)',
					},
				},
			},
		},
	},
	showOnlyTab: {
		display: 'none',
		'@media only screen and (max-width: 1080px)': {
			display: 'block',
		},
	},
};

export default styles;
