import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import FoodsItem from '../FoodsItem/FoodsItem';
import WhyChoose from '../WhyChoose/WhyChoose';
import FooterBox from '../FooterBox/FooterBox';


const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <FoodsItem></FoodsItem>
            <WhyChoose></WhyChoose>
            <FooterBox></FooterBox>

        </div>
    );
};

export default Home;