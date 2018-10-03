import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import IntroSection from '../components/intro/IntroSection';
import ShopByCategory from '../components/shopCategory/shopCategory';
import SeperationBanner from '../components/seperationBanner/SeperationBanner';

import BlogPosts from '../components/blogPosts/blogPosts';
import Footer from '../components/footer/FooterSection';


const HomePage = () =>{
    return(
        <React.Fragment>
                <HeaderSection/>   
                <IntroSection />
                <ShopByCategory/>
                <SeperationBanner/>
                <BlogPosts/>
                <Footer/>
        </React.Fragment>
    );
}

export default HomePage;