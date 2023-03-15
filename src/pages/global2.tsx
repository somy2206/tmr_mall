const styles: { [key: string]: any } = {
    container_fixed: {
        maxWidth: '1228px',
        margin: '0 auto',
        padding: '30px 15px',
        width: '100%',
    },
    // container_layout: {
    //     maxWidth: '1228px',
    //     margin: '0 auto',
    //     padding: ['25px 20px', '30px 40px'],
    //     width: '100%',
    //     ' .css-p8uyma-CategoryBlocks': {
    //         gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //     },
    //     'form': {
    //         width: '100%',
    //     },
    //     '&.page-width--narrow': {
    //         maxWidth: '766px',
    //         margin: '0 auto',
    //         padding: ['25px 20px', '40px 40px'],
    //         color: 'rgba(255,255,255,.75)',
    //         lineHeight: '1.8',
    //         fontSize: '16px',
    //     },
    //     '.contact__fields': {
    //         display: ['flex', 'grid'],
    //         gridTemplateColumns: 'repeat(2, 1fr)',
    //         gridColumnGap: '1rem',
    //         flexWrap: 'wrap',
    //     },
    //     '.title': {
    //         fontSize: ['40px', '45px', '52px'],
    //         fontFamily: 'heading',
    //         color: 'rgba(255,255,255,1)',
    //         fontWeight: 500,
    //         marginBottom: ['1rem', '1.5rem'],
    //         lineHeight: '1.3',
    //     },
    //     '.field': {
    //         position: 'relative',
    //         width: '100%',
    //         display: 'flex',
    //         transition: 'box-shadow var(--duration-short) ease',
    //         marginBottom: '2rem',
    //     },
    //     '.content_wrap p': {
    //         lineHeight: '1.8',
    //         fontSize: '16px',
    //     },
    //     '.content_wrap a': {
    //         color: 'rgba(255,255,255,1)',
    //         textDecoration: 'underline',
    //         '&:hover': {
    //             textDecoration: 'none',
    //         },
    //     },
    //     '.field__label': {
    //         fontSize: '16px',
    //         left: '15px',
    //         top: '11px',
    //         marginBottom: '0',
    //         pointerEvents: 'none',
    //         position: 'absolute',
    //         transition: 'all ease',
    //         color: 'rgba(255,255,255,.75)',
    //         letterSpacing: '.1rem',
    //         lineHeight: '1.5',
    //     },
    //     '.field__input': {
    //         flexGrow: '1',
    //         fontSize: '16px',
    //         textAlign: 'left',
    //         padding: ' 15px',
    //         margin: '1px',
    //         transition: 'box-shadow .3s ease',
    //         backgroundColor: 'transparent',
    //         color: '#fff',
    //         height: '45px',
    //         position: 'relative',
    //         border: '1px solid rgba(255,255,255,.55)',
    //         borderRadius: ' 0',
    //         outline: '0',
    //         '&:hover': {
    //             boxShadow: '0 0 0 1.5px rgb(255 255 255 / 55%)',
    //         },
    //         '&:focus': {
    //             borderRadius: ' 0',
    //             boxShadow: '0 0 0 1.5px rgb(255 255 255 / 55%)',
    //         },
    //     },
    //     '.contact__field ': {
    //         maxWidth: '726px',
    //         margin: '0 auto',
    //         paddingTop: ['20px', '50px', '80px'],
    //         '.title ': {
    //             marginBottom: ['2rem', '3rem', '5rem'],

    //         },
    //         'button': {
    //             border: '0',
    //         },
    //     },
    //     'textarea.field__input': {
    //         height: 'auto',
    //         minHeight: '100px',
    //     },
    //     '.button': {
    //         fontSize: '15px',
    //         letterSpacing: '.5px',
    //         color: '#fff',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         cursor: 'pointer',
    //         minWidth: [130, 172],
    //         minHeight: [40, 50],
    //         borderRadius: 0,
    //         fontWeight: 500,
    //         textTransform: 'capitalize',
    //         transition: 'opacity 0.2s ease',
    //         backgroundColor: '#f1a329',
    //         fontFamily: 'body',
    //         marginTop: '-1px',
    //         'svg': {
    //             width: [16, 18],
    //             height: [16, 18],
    //             marginLeft: 10,
    //         },
    //         ':focus': {
    //             outline: 'none',
    //         },
    //         ':hover': {
    //             opacity: 0.9,
    //         },
    //     },
    // },
    // wrapper: {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',

    // },
    // 'latest_section_wrapper': {
    //     'div > div:nth-child(2)': {
    //         padding: '0 15px',
    //     },
    // },
    // 'category__wrapper1': {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     '.container_fixed': {
    //         padding: ['30px 0 30px 15px', '30px 15px 60px'],
    //         '> div > div': {
    //             gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //             '@media only screen and (max-width: 1100px)': {
    //                 gridTemplateColumns: '1fr 1fr 1fr',
    //             },
    //             '@media only screen and (max-width: 768px)': {
    //                 gridTemplateColumns: 'auto',
    //                 whiteSpace: 'nowrap',
    //                 display: 'flex',
    //                 overflow: 'auto',
    //                 paddingBottom: '10px',
    //                 paddingRight: '15px',
    //                 gridGap: '15px',
    //                 '>div': {
    //                     minWidth: '250px',
    //                 },
    //             },
    //         },
    //     },

    // },
    // 'category3_wrapper': {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     '.container_fixed': {
    //         padding: ['30px 0 30px 15px', '30px 15px 60px'],
    //         '> div > div': {
    //             gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //             '@media only screen and (max-width: 1100px)': {
    //                 gridTemplateColumns: '1fr 1fr 1fr',
    //             },
    //             '@media only screen and (max-width: 768px)': {
    //                 gridTemplateColumns: 'auto',
    //                 whiteSpace: 'nowrap',
    //                 display: 'flex',
    //                 overflow: 'auto',
    //                 paddingBottom: '10px',
    //                 paddingRight: '15px',
    //                 gridGap: '15px',
    //                 '>div': {
    //                     minWidth: '250px',
    //                 },
    //             },
    //         },
    //     },
    // },
    // 'category4_wrapper': {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     '.container_fixed': {
    //         padding: ['30px 0 0px 15px', '30px 15px 60px'],
    //         '> div > div': {
    //             gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //             '@media only screen and (max-width: 1100px)': {
    //                 gridTemplateColumns: '1fr 1fr 1fr',
    //             },
    //             '@media only screen and (max-width: 768px)': {
    //                 gridTemplateColumns: 'auto',
    //                 whiteSpace: 'nowrap',
    //                 display: 'flex',
    //                 overflow: 'auto',
    //                 paddingBottom: '10px',
    //                 paddingRight: '15px',
    //                 gridGap: '15px',
    //                 '>div': {
    //                     minWidth: '250px',
    //                 },
    //             },
    //         },
    //     },
    // },
    // 'collage_section_wrapper': {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     '.container_fixed': {
    //         padding: ['30px 15px 30px', '30px 15px 60px'],
    //         '@media only screen and (max-width: 768px)': {
    //             paddingRight: '0',
    //         },
    //     },
    //     '.collage-section': {
    //         display: ['block', 'flex'],
    //         justifyContent: 'space-between',
    //         '@media only screen and (max-width: 768px)': {
    //             whiteSpace: 'nowrap',
    //             overflow: 'auto',
    //             paddingBottom: '10px',
    //             '>div': {
    //                 minWidth: '250px',
    //             },
    //         },
    //     },
    //     '.collage--left-wrap': {
    //         width: ['60%', 'calc(50% - 4px)'],
    //         '@media only screen and (max-width: 768px)': {
    //             display: ['inline-block'],
    //             paddingRight: '15px',
    //         },
    //         'div div': {
    //             display: 'block',
    //         },
    //         '> div': {
    //             height: '100%',
    //         },
    //         '> div > div': {
    //             height: '100%',
    //         },
    //         '> div > div > div': {
    //             height: '100%',
    //         },
    //     },
    //     '.collage--right-wrap': {
    //         width: ['60%', 'calc(50% - 4px)'],
    //         '@media only screen and (max-width: 768px)': {
    //             display: ['inline-block'],
    //         },
    //         '> div': {
    //             height: '100%',
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 width: '100%',

    //             },
    //         },
    //         '> div > div': {
    //             height: '100%',
    //             flexWrap: 'wrap',
    //             display: 'flex',
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 width: '100%',
    //                 whiteSpace: 'nowrap',
    //             },
    //         },

    //         '> div > div > div': {
    //             width: ['100%', 'calc(50% - 10px)'],
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 paddingRight: '15px',
    //             },
    //         },
    //         '> div > div > div > a': {
    //             width: '100%',
    //         },
    //     },

    // },
    // 'category2__wrapper': {
    //     backgroundColor: '#1d1d24',
    //     maxWidth: '1228px',
    //     width: '100%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     '.container_fixed': {
    //         padding: ['30px 0 30px 15px', '30px 15px 60px'],
    //         '> div > div': {
    //             gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //             '@media only screen and (max-width: 1100px)': {
    //                 gridTemplateColumns: '1fr 1fr 1fr',
    //             },
    //             '@media only screen and (max-width: 768px)': {
    //                 gridTemplateColumns: 'auto',
    //                 whiteSpace: 'nowrap',
    //                 display: 'flex',
    //                 overflow: 'auto',
    //                 paddingBottom: '10px',
    //                 paddingRight: '15px',
    //                 gridGap: '15px',
    //                 '>div': {
    //                     minWidth: '250px',
    //                 },
    //             },
    //         },
    //     },
    // },
    // textTitle: {
    //     color: '#fff',
    //     fontSize: ['32px', 48],
    //     textTransform: 'uppercase',
    //     fontWeight: '600',
    //     letterSpacing: '.7px',
    //     position: 'relative',
    //     fontFamily: 'oswald',
    //     textAlign: 'center',
    //     '&::after': {
    //         content: `''`,
    //         position: 'absolute',
    //         left: '0px',
    //         bottom: '-5px',
    //         width: '70px',
    //         height: '3px',
    //         background: '#f1a329',
    //         margin: 'auto',
    //         pointerEvents: 'none',
    //         right: '0',
    //     },

    // },
    // iconAccount: {
    //     color: '#f1a329'
    // },
    // '.container': {
    //     maxWidth: '100%',
    // },
    // 'collage_section2_wrapper': {
    //     padding: ['30px 0 0px', '40px 0 10px'],
    //     '.container_fixed': {
    //         maxWidth: '1228px',
    //         margin: '0 auto',
    //         padding: '30px 15px',
    //         width: '100%',
    //         '@media only screen and (max-width: 768px)': {
    //             paddingRight: '0',
    //             paddingBottom: '0px',
    //         },
    //     },
    //     '.collage-section': {
    //         display: ['block', 'flex'],
    //         justifyContent: 'space-between',
    //         '@media only screen and (max-width: 768px)': {
    //             whiteSpace: 'nowrap',
    //             overflow: 'auto',
    //             paddingBottom: '10px',
    //             '>div': {
    //                 minWidth: '250px',
    //             },
    //         },

    //     },
    //     '.collage--left-wrap': {
    //         width: ['60%', 'calc(50% - 4px)'],
    //         '@media only screen and (max-width: 768px)': {
    //             display: ['inline-block'],
    //             paddingRight: '10px',
    //         },
    //         'div div': {
    //             display: 'block',
    //         },
    //         '> div': {
    //             height: '100%',
    //         },
    //         '> div > div': {
    //             height: '100%',
    //         },
    //         '> div > div > div': {
    //             height: '100%',
    //         },
    //     },
    //     '.collage--right-wrap': {
    //         width: ['60%', 'calc(50% - 4px)'],
    //         '@media only screen and (max-width: 768px)': {
    //             display: ['inline-block'],
    //         },
    //         '> div': {
    //             height: '100%',
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 width: '100%',

    //             },
    //         },
    //         '> div > div': {
    //             height: '100%',
    //             flexWrap: 'wrap',
    //             display: 'flex',
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 width: '100%',
    //                 whiteSpace: 'nowrap',
    //             },
    //         },

    //         '> div > div > div': {
    //             width: ['100%', 'calc(50% - 10px)'],
    //             '@media only screen and (max-width: 768px)': {
    //                 display: ['inline-block'],
    //                 paddingRight: '15px',
    //             },
    //         },
    //         '> div > div > div > a': {
    //             width: '100%',
    //         },
    //     },
    //     '.title': {
    //         color: '#fff',
    //         fontSize: ['32px', 48],
    //         textTransform: 'uppercase',
    //         fontWeight: '600',
    //         letterSpacing: '.7px',
    //         position: 'relative',
    //         fontFamily: 'oswald',
    //         textAlign: 'center',

    //         '&::after': {
    //             content: `''`,
    //             position: 'absolute',
    //             left: '0px',
    //             bottom: '-5px',
    //             width: '70px',
    //             height: '3px',
    //             background: '#f1a329',
    //             margin: 'auto',
    //             pointerEvents: 'none',
    //             right: '0',
    //         },
    //     },
    // },
    // 'category5_wrapper': {
    //     padding: ['30px 0 0px', '40px 0 10px'],
    //     '.container_fixed': {
    //         maxWidth: '1228px',
    //         margin: '0 auto',
    //         padding: ['30px 0 30px 15px', '30px 15px 60px'],
    //         width: '100%',
    //         '> div > div': {
    //             gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    //             '@media only screen and (max-width: 1100px)': {
    //                 gridTemplateColumns: '1fr 1fr 1fr',
    //             },
    //             '@media only screen and (max-width: 768px)': {
    //                 gridTemplateColumns: 'auto',
    //                 whiteSpace: 'nowrap',
    //                 display: 'flex',
    //                 overflow: 'auto',
    //                 paddingBottom: '10px',
    //                 paddingRight: '15px',
    //                 '>div': {
    //                     minWidth: '250px',
    //                 },
    //             },
    //         },
    //     },
    //     '.title': {
    //         color: '#fff',
    //         fontSize: ['32px', 48],
    //         textTransform: 'uppercase',
    //         fontWeight: '600',
    //         letterSpacing: '.7px',
    //         position: 'relative',
    //         fontFamily: 'oswald',
    //         textAlign: 'center',
    //         '&::after': {
    //             content: `''`,
    //             position: 'absolute',
    //             left: '0px',
    //             bottom: '-5px',
    //             width: '70px',
    //             height: '3px',
    //             background: '#f1a329',
    //             margin: 'auto',
    //             pointerEvents: 'none',
    //             right: '0',
    //         },
    //     },
    // },
    // 'brand_store_wrap': {
    //     padding: ['30px 0 0px', '40px 0 10px'],
    //     backgroundColor: '#4a4a4a',
    //     '.brand-content-wrap': {
    //         width: '100%',
    //         padding: '0 5px',
    //         '@media (min-width:769px) and (max-width: 1100px)': {
    //             width: '25%',
    //             padding: 0,
    //         },
    //     },
    //     '.title': {
    //         color: '#fff',
    //         fontSize: ['32px', 48],
    //         textTransform: 'uppercase',
    //         fontWeight: '600',
    //         letterSpacing: '.7px',
    //         position: 'relative',
    //         fontFamily: 'oswald',
    //         textAlign: 'center',
    //         margin: ['0 0 10px', '0 0 10px'],
    //         '&::after': {
    //             content: `''`,
    //             position: 'absolute',
    //             left: '0px',
    //             bottom: '-5px',
    //             width: '70px',
    //             height: '3px',
    //             background: '#f1a329',
    //             margin: 'auto',
    //             pointerEvents: 'none',
    //             right: '0',
    //         },
    //     },

    // },



};

export default styles;