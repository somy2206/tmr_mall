/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx } from 'theme-ui';
import { IoIosArrowDown } from 'react-icons/io';
import useWindowSize from '../../../../../hooks/useWindowSize';
import styles from './navbar.style';

const menuStaticQuery = graphql`
	query {
		prismic {
			firstData: allCategorys {
				totalCount
				edges { 
					cursor
					node {
						_meta {
							uid
						}
						title
						parent_category {
							... on PRISMIC_Category {
								title
								_meta {
									uid
								}
							}
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
			lastData: allCategorys(after: "YXJyYXljb25uZWN0aW9uOjE5") {
				totalCount
				edges {
					cursor
					node {
						_meta {
							uid
						}
						title
						parent_category {
							... on PRISMIC_Category {
								title
								_meta {
									uid
								}
							}
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
			dataAll:allNavigations {
      edges {
        node {
          _linkType
          body {
            ... on PRISMIC_NavigationBody1st_level {
              type
              label
              primary {
                link_text
                nav_link {
                  _linkType
				   ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
            ... on PRISMIC_NavigationBody2nd_level {
              type
              label
              primary {
                link_text
                nav_link {
                  _linkType
				   ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
              fields {
                third_level_link {
                  _linkType
				   ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                third_level_link_text
              }
            }
          }
        }
      }
    
			}
		}
	}
`;

const getMenuData = (categories: any) => {
	const data: any = [];
	categories.forEach((category: any) => {
		if (!category?.node?.parent_category) {
			const uid = category?.node?._meta.uid;
			const text = category?.node?.title[0]?.text;
			if (uid && text) {
				data.push({ path: uid, title: text });
			}
		}
	});

	categories.forEach((category: any) => {
		if (category?.node?.parent_category) {
			const parent = category?.node?.parent_category?._meta?.uid;
			const uid = category?.node?._meta.uid;
			const text = category?.node?.title[0]?.text;
			const index = data.findIndex((item: any) => item.path === parent);
			if (index > -1) {
				if (data[index].submenu && data[index].submenu.length) {
					data[index].submenu.push({ path: uid, title: text });
				} else {
					data[index].submenu = [];
					data[index].submenu.push({ path: uid, title: text });
				}
			}
		}
	});
	return data;
};

const MainMenu: React.FC<{ onClick?: () => void; pathPrefix?: string }> = ({
	onClick,
	pathPrefix = '/collection',
}) => {
	const [isShow, setIsShown]: any = useState(false);
	return <StaticQuery<GatsbyTypes.Query>
		query={`${menuStaticQuery}`}
		render={(data) => {


			const { firstData, lastData, dataAll }: any = data.prismic;
			const category2 = [...dataAll.edges];
			const categories = [...firstData.edges, ...lastData.edges];
			const menuData = getMenuData(categories);

			// console.log("|====================== category data all=======================>", category2);
			const mainMenu = useRef(null);
			const windowSize = useWindowSize();
			useEffect(() => {
				if (windowSize && windowSize < 1081) {
					//alert('test');
					const menu = mainMenu.current.children;

					console.log("change data all ======>", mainMenu);
					for (let index = 0; index < menu.length; index++) {
						const element = menu[index];
						element.addEventListener('click', function () {
							mainMenu.current.classList.toggle('parent-active');
							element.classList.toggle('active');
						});
					}
				}
			}, [windowSize]);
			let cat_All: any = [];
			for (let i = 0; i < category2.length; i++) {
				category2.forEach((item, index) => {
					if (category2[i].node.body[index] != undefined && category2[i].node.body[index].type === '1st_level') {
						cat_All.push({ first_level: category2[i].node.body[index], second_level: category2[i].node.body.filter((itm: any) => itm.type === '2nd_level') ? category2[i].node.body.filter((itm: any) => itm.type === '2nd_level') : 0 })

					}
				})
			}
			// console.log("<============||||||||========|||||||||==========>", cat_All);
			return (
				<Box sx={styles.mainMenuNav} as="div">
					{/* <ul className="mainMenu_wrap" onMouseLeave={() => setIsShown(false)}> */}
					<Box className="mainMenu_wrap" as="ul" ref={mainMenu} sx={styles.mainMenu} onMouseLeave={() => setIsShown(false)}>
						{
							// urll.split('://')[1]
							cat_All.map((item: any, ind: any) => {
								return <li key={'main_' + ind}>
									{item.second_level.length == 0 ? <Link
										activeClassName="active"
										to={item.first_level.primary.nav_link.url.split('://')[1]}
										onClick={onClick}
									>
										<span onMouseEnter={() => setIsShown(item.first_level.primary.link_text)}>
											{item.first_level.primary.link_text}
										</span>
									</Link> : <span onMouseEnter={() => setIsShown(item.first_level.primary.link_text)}

									>{item.first_level.primary.link_text}
										<svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
											</path></svg>
										<svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
											</path></svg>
									</span>

									}
									{item.second_level.length > 0 &&
										<ul className="mainMenu_wrap_second" style={isShow == item.first_level.primary.link_text ? { display: 'block' } : { display: 'none' }}>
											{item.second_level.map((itm: any, index: any) => {
												return <li key={'second_menu_' + index}>
													{itm.fields.length == 0 ?
														<Link
															activeClassName="active"
															to={itm.first_level.primary.nav_link.url.split('://')[1]}
															onClick={onClick}
														>
															<svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
																<path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
																</path></svg>
															<span>{itm.primary.link_text}</span>
														</Link> : <span> {itm.primary.link_text} </span>
													}
													{itm.fields.length > 0 &&
														<ul className="mainMenu_wrap_third">
															{itm.fields.map((it_m: any, ind_field: any) => {
																return <li key={'field_menu_' + ind_field}>
																	<Link
																		activeClassName="active"
																		to={it_m.third_level_link.url.split('://')[1]}
																		onClick={onClick}
																	>
																		<span>{it_m.third_level_link_text}</span>
																	</Link>
																</li>
															})}
														</ul>
													}
												</li>
											})}

										</ul>
									}

								</li>
							})
						}
					</Box>
					{/* </ul> */}
				</Box>
			);
		}}
	/>
}

export default MainMenu;