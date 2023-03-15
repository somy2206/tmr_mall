import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/seo';
import PrimaryLayout from '../components/layout/primary/primary';
import { Box, Text } from 'theme-ui';
import RichTextsection from '../components/Richtext/richtext';
// import styles from './global2';

const privacyStaticQuery = graphql`
	query {
		prismic {
				allRichtexts {
				    edges {
                        node {
                            title
                            text_group {
                                heading
                                content
                        }
					}
				}
			}
		}
	}
`;


const PrivacyPage: React.FC<{}> = () => (
    <StaticQuery<GatsbyTypes.Query>
        query={`${privacyStaticQuery}`}
        render={(data) => {
            const node = get(data, 'prismic.allRichtexts.edges[0].node');
            const maintitle = node.title[0].text;
            const textgroup = node.text_group
            // console.log("node privacy",node)
            return (
                <PrimaryLayout
                    fluid={true}
                    homeLink="/privacy-policy"
                    pathPrefix="/privacy-policy"
                    showNoticeBar={false}
                >
                    {/* sx={styles.container_layout} */}
                    <Box className="privacy-page page-width--narrow">
                        <SEO title="Policy" />
                        <div className='privacyPolicy--wrapper'>
                            {/* sx={styles.title} */}
                            <h1 className='title'>{maintitle}</h1>
                            <RichTextsection richtextSection={textgroup}
                            />
                        </div>
                    </Box>
                </PrimaryLayout>
            );
        }
        }
    />
);

export default PrivacyPage;