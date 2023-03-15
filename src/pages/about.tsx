// import React from 'react';
import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SEO from '../components/seo';
import { Box, Button, jsx, Heading } from 'theme-ui';
import PrimaryLayout from '../components/layout/primary/primary';
// import styles from './global2';
import styles from '../components/layout/layout.style';
import AccordionBTN from '../components/accordion/accodion';

const aboutPageStaticQuery = graphql` 
	query {
		prismic {
			 allAbouts {
      edges {
        node {
          title
          accordion_group {
            content
            heading
            image
          }
        }
      }
    }
		}
	}
`;

const AboutPage: React.FC<{}> = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${aboutPageStaticQuery}`}
    render={(data) => {
      const categoryItems: any = get(
        data,
        'prismic.allAbouts.edges[0].node.accordion_group'
      );
      const node = get(data, 'prismic.allAbouts.edges[0].node');
      const title = node.title[0].text;
      // console.log("<=================categoryItems================>", title);
      const accordionData = categoryItems

      return (
        <PrimaryLayout
          fluid={true}
          homeLink="/about"
          pathPrefix="/about"
          showNoticeBar={false}
        >
          {/* sx={styles.container_fixed} */}
          <SEO title="About" />
          {/* sx={styles.container_layout} */}
          <Box className="accordion " sx={styles.container_fixed}>

            <Heading as='h1' className='title'>{title}</Heading>
            {categoryItems.map(({ content, heading, image }: any) => (
              <AccordionBTN title={heading[0].text} content={content[0].text} image_url={image.url} />

            ))}
          </Box>
        </PrimaryLayout>
      );
    }}
  />
);

export default AboutPage

// write a program contect us page