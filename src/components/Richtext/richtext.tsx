/** @jsx jsx */
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Box, Text, jsx, Button, Card, Grid } from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RichText } from 'prismic-reactjs';


type Props = { 
	title?: string[];
	heading?: string[];
	content?: string[];
};
const getRichtextData = (edges: any): any => {
	const data: any = [];
	edges.forEach((allText: any, index: number) => {
		data.push({
			id: `text-${index}`,
            title: allText.title,
			heading: allText.heading,
			content: allText.content,
		});
	}); 
	return data;
};

const RichTextsection =({ richtextSection }: any) => {
	const categories = getRichtextData(richtextSection);
	console.log("categories>>>>", categories);
	return (

		<Box>
            <div className='content_wrap'>
                {categories.title && RichText.render(categories.title)}
                    {categories.map((item: any, index: number) => (
                        <div key={'text-' + index} className='allcontents' >
                            <Box>
                                {item.heading && RichText.render(item.heading)}
                                {item.content && RichText.render(item.content)}
                            </Box>
                        </div>
                    ))}
                </div>
		</Box>
	);
};

export default RichTextsection;

