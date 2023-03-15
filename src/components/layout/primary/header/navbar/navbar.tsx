/** @jsx jsx */
import { useRef, useState, useContext, useEffect } from 'react';
import { Button, Box, jsx } from 'theme-ui';
import Logo from '../../../../logo/logo';
import Container from '../../../../container/container';
import Search from '../../../../search';
import useOnClickOutside from '../../../../../hooks/useOutsideClick';
import MainMenu from './main-menu';
import styles from './navbar.style';
import { Flex, Text } from 'theme-ui';
import { IoIosMenu } from 'react-icons/io';
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineShopping,
} from 'react-icons/ai';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Sidebar from '../../../secondary/sidebar/sidebar';
import DrawerCart from '../../../../drawer-cart/drawer-cart';
import { LocalCartContext } from '../../../../../provider/local-cart-provider';
import useWindowSize from '../../../../../hooks/useWindowSize';

// import styles from './header.style';



const Navbar: React.FC<{
	fluid?: boolean;
	homeLink?: string;
	pathPrefix?: string;
}> = ({ fluid, homeLink, pathPrefix }) => {
	const [visible, setVisible] = useState(false);
	const searchRef = useRef(null!);
	useOnClickOutside(searchRef, () => setVisible(false));


	const [sidebarVisibile, setSidebarVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);
	const mobileSearchRef = useRef(null!);
	useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
	const { products } = useContext(LocalCartContext);
	const windowSize = useWindowSize();
	useEffect(() => {
		if (windowSize && windowSize > 1024) {
			setSidebarVisible(false);
		}
	}, [windowSize]);


	return (
		<Box as="nav" sx={styles.navbar}>
			<Container fluid={fluid} className={visible ? 'activeSearch' : ''}>
				<Logo path={homeLink} />
				<MainMenu pathPrefix={pathPrefix} />
				<Box className="rightPart" sx={styles.rightPart}>
					{visible ? (
						<Box sx={styles.search} ref={searchRef}>
							<Search />
						</Box>
					) : (
						<Button
							title="Search"
							variant="text"
							sx={{ svg: { width: 23 } }}
							onClick={() => setVisible(true)}
						>
							<svg width="16" height="16" viewBox="0 0 16 16">
								<path
									d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
									transform="translate(-4 -1.525)"
									fill="#292929"
									fillRule="evenodd"
								/>
							</svg>
						</Button>
					)}
					{/* <Link to='/account/login'>Login</Link> */}
					<a
						href="https://picksystore.myshopify.com/account"
						target="_blank"
						rel="noopener noreferrer"
						title="My account"
					>
						{/* sx={styles.iconAccount} */}
						<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-account" fill="none" viewBox="0 0 18 19">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
							</path></svg>
					</a>
					<Button
						variant="text"
						aria-label="Cart"
						onClick={() => setCartVisible(true)}
					>
						{/* sx={styles.badge} */}
						<AiOutlineShopping />
						<Text >{products.length}</Text>
					</Button>
				</Box>
			</Container >
			<Drawer
				level={null}
				width="100%"
				open={sidebarVisibile}
				handler={false}
				placement="left"
				onClose={() => setSidebarVisible(false)}
			>
				<Sidebar onClose={() => setSidebarVisible(false)} />
			</Drawer>
			<DrawerCart
				open={cartVisible}
				onClick={() => setCartVisible(false)}
				onClose={() => setCartVisible(false)}
				products={products}
			/>
		</Box >
	);
};

export default Navbar;
