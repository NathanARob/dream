import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import CallToAction from '../components/CallToAction/CallToAction';
import IntroSection from '../components/intro/IntroSection';
import ShopByCategory from '../components/shopCategory/shopCategory';
import SeperationBanner from '../components/seperationBanner/SeperationBanner';
import FeaturedPost from '../components/featuredPost/FeaturedPost';
import BlogPosts from '../components/blogPosts/blogPosts';

import Footer from '../components/footer/FooterSection';


const HomePage = () =>{
    return(
        <React.Fragment>
                <HeaderSection/>
                <CallToAction/>
                <IntroSection />
                <ShopByCategory/>
                <SeperationBanner/>
                {/* <FeaturedPost/> */}
                <BlogPosts/>
                <Footer/>
               
        </React.Fragment>
    );
}

export default HomePage;