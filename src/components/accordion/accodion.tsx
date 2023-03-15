/** @jsx jsx */
import styles from 'components/product-single.style';
import React, { useState } from 'react';
import { Box, Button, Text, jsx } from 'theme-ui';
import Styles from './accordion.style';

type Props = { 
    title: String;
    content: String;
    image_url: String;
};

const AccordionBTN: React.FC<Props> = ({ title, content, image_url }: any) => {
    const [isActive, setIsActive] = useState(false);


    return (
        <Box className="accordion-item" sx={Styles.accordion_item}>
            <Box className="accordion-title" onClick={() => setIsActive(!isActive)}
                sx={Styles.accordion_btn}>
                <Text>{title}</Text>
                <Box sx={Styles.accordion_icon}>{isActive ? '-' : '+'}</Box>
            </Box>
            {isActive && <Box className="accordion-content">
                <Text
                    sx={Styles.text}>{content}</Text>
                <Box sx={Styles.image_wrraper} className="accordion-content"> <img src={image_url} alt='' width='100%' /></Box>
            </Box>}
        </Box>
    );
};

export default AccordionBTN;
