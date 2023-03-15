/** @jsx jsx */
import { useRef, useState, useEffect, Fragment, useContext } from 'react';
import { Grid, Box, Flex, Heading, Button, jsx, Image, Text } from 'theme-ui';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Logo from '../../../../logo/logo';
import Container1 from '../../../../container/container';
import Search from '../../../../search';
import MainMenu from '../navbar/main-menu';
import Footer from '../../footer/footer';
import useOnClickOutside from '../../../../../hooks/useOutsideClick';
import useWindowSize from '../../../../../hooks/useWindowSize';
import styles from './topbar.style';
import { LocalCartContext } from '../../../../../provider/local-cart-provider';
import Cart from '../../../../cart/cart';
import LineItem from '../../../../cart/line-item/line-item';
import emptyCartSVG from '../../../../../images/empty-cart.svg';
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShopping,
} from 'react-icons/ai';
import 'rc-drawer/assets/index.css';
import Sidebar from '../../../secondary/sidebar/sidebar';
import DrawerCart from '../../../../drawer-cart/drawer-cart';
import { Container } from 'theme-ui'
const Topbar: React.FC<{ fluid?: boolean; homeLink?: string; pathPrefix?: string; }> = ({
	fluid,
	homeLink,
	pathPrefix
}) => {
	const { products, totalPrice, currency } = useContext(LocalCartContext);
	const windowSize = useWindowSize();
	const [visible, setVisible] = useState(false);
	const [visible2, setVisible2] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);
	const mobileSearchRef = useRef(null!);
	const [open, set] = useState(false);
	const [sidebarVisibile, setSidebarVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);
	useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
	useEffect(() => {

		if (windowSize && windowSize > 1080) {
			setVisible(false);
			setSidebarVisible(false);
			setVisible2(true)
		} else {
			setVisible2(false)
		}
	}, [windowSize]);

	const handleDrawerLeft = () => {
		setVisible(true);
		document.body.classList.add('drawer_left-open');
	}

	const handleDrawerClose = () => {
		setVisible(false);
		document.body.classList.remove('drawer_left-open');
	}
	return (
		<Fragment>
			{/* sx={styles.topbar} */}
			<Box >
				<Container1 fluid={fluid}>
					{mobileSearch ? (
						<Box ref={mobileSearchRef}>
							<Search />
						</Box>
					) : (
						<Grid className="grid" sx={styles.grid}>
							<Flex className="logo-area">
								<Button
									variant="text"
									sx={styles.hamburgBtn}
									onClick={() => handleDrawerLeft()}
									aria-label="Hamburg menu"
								>
									<IoIosMenu />
								</Button>

								<Logo path={homeLink} />
							</Flex>

							<Box className="topbar-search">
								<Button
									variant="text"
									sx={styles.searchBtn}
									onClick={() => setMobileSearch(true)}
									aria-label="Search"
								>
									<span className='search__icon'>
										<svg width="16" height="16" viewBox="0 0 16 16">
											<path
												d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
												transform="translate(-4 -1.525)"
												fill="#292929"
												fillRule="evenodd"
											/>
										</svg>
									</span>
								</Button>
								<Search />
							</Box>

							<Box className="topbar-links" sx={styles.rightPart}>
								<a
									href={`https://${process.env.GATSBY_SHOP_NAME}.myshopify.com/account`}
									rel="noopener noreferrer"
									target="_blank"
									title="My account"
								>
									{/* sx={styles.iconAccount} */}

									<svg sx={styles.iconAccount} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-account" fill="none" viewBox="0 0 18 19">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
										</path></svg>
								</a>
								<Button
									variant="text"
									aria-label="Cart"
									onClick={() => setCartVisible(true)}
								>
									{/* <AiOutlineShopping /> */}
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 504 504" xmlSpace="preserve">

										<g>
											<g>
												<path sx={styles.st0} className="st0" d="M485.6,114.3c-1.5-1.5-3.5-2.3-5.6-2.3c0,0-0.1,0-0.1,0l-374.5,4.9c-2.5,0-4.9,1.3-6.4,3.3    c-1.5,2.1-1.9,4.7-1.1,7.1l62.5,195.1c1.1,3.3,4.1,5.6,7.6,5.6h280c22.1,0,40-17.9,40-40V120C488,117.9,487.1,115.8,485.6,114.3z     M208,288c0,4.4-3.6,8-8,8s-8-3.6-8-8V168c0-4.4,3.6-8,8-8s8,3.6,8,8V288z M248,288c0,4.4-3.6,8-8,8s-8-3.6-8-8V168    c0-4.4,3.6-8,8-8s8,3.6,8,8V288z M288,288c0,4.4-3.6,8-8,8s-8-3.6-8-8V168c0-4.4,3.6-8,8-8s8,3.6,8,8V288z M328,288    c0,4.4-3.6,8-8,8s-8-3.6-8-8V168c0-4.4,3.6-8,8-8s8,3.6,8,8V288z M368,288c0,4.4-3.6,8-8,8s-8-3.6-8-8V168c0-4.4,3.6-8,8-8    s8,3.6,8,8V288z M408,288c0,4.4-3.6,8-8,8s-8-3.6-8-8V168c0-4.4,3.6-8,8-8s8,3.6,8,8V288z M448,288c0,4.4-3.6,8-8,8s-8-3.6-8-8    V168c0-4.4,3.6-8,8-8s8,3.6,8,8V288z" />
											</g>
											<g>
												<circle sx={styles.st1} className="st1" cx="144" cy="416" r="32" />
											</g>
											<g>
												<circle sx={styles.st1} className="st1" cx="456" cy="416" r="32" />
											</g>
											<g>
												<path sx={styles.st2} className="st2" d="M492,108H108c-0.3,0-0.6,0.1-0.9,0.1l-6.8-23C96.5,72.7,84.9,64,72,64l0,0v0H56v16h16v0l0,0    c5.9,0,11.2,4,12.9,9.6L158.1,336c3,10.2,9,18.9,16.6,25.7l-37.2,49.5c-2.7,3.5-1.9,8.6,1.6,11.2c1.4,1.1,3.1,1.6,4.8,1.6    c2.4,0,4.8-1.1,6.4-3.2l37.7-50.3c7.3,3.5,15.3,5.5,23.7,5.5H448v40c0,4.4,3.6,8,8,8s8-3.6,8-8v-40h16c4.4,0,8-3.6,8-8s-3.6-8-8-8    H211.8c-17.6,0-33.3-11.8-38.3-28.6L114.2,132H492c6.6,0,12-5.4,12-12S498.6,108,492,108z" />
											</g>
											<g>
												<path sx={styles.st1} className="st1" d="M56,88H16C7.2,88,0,80.8,0,72l0,0c0-8.8,7.2-16,16-16h40c8.8,0,16,7.2,16,16l0,0C72,80.8,64.8,88,56,88z" />
											</g>
										</g>
									</svg>
									{/* sx={styles.st0} */}
									{/* sx={styles.st1} */}
									{/* sx={styles.st1} */}
									{/* sx={styles.st2} */}
									{/* sx={styles.st1} */}
									<Text sx={styles.badge}>{products.length}</Text>
								</Button>
							</Box>
						</Grid>
					)}
					{visible2 ? <MainMenu pathPrefix={pathPrefix} /> : ''}

				</Container1>
				<Drawer
					level={null}
					width="100%"
					open={visible}
					handler={false}
					placement='left'
					onClose={() => handleDrawerClose()}
				>
					<Flex sx={styles.drawerTitle}>
						<Heading as="h2">Categories</Heading>
						<Button
							variant="text"
							onClick={() => handleDrawerClose()}
							aria-label="Close menu"

						>
							<IoIosClose />
						</Button>
					</Flex>
					<MainMenu onClick={() => setVisible(false)} />
					<Footer />
				</Drawer>



				{/* <Drawer
					level={null}
					width="100%"
					open={sidebarVisibile}
					handler={false}
					placement="right"
					onClose={() => setSidebarVisible(false)}>
					<Sidebar onClose={() => setSidebarVisible(false)} />
				</Drawer> */}

				<DrawerCart
					open={cartVisible}
					onClick={() => setCartVisible(false)}
					onClose={() => setCartVisible(false)}
					products={products}
				/>
			</Box>
		</Fragment>
	);
};


export default Topbar;
