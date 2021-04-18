import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Review from '../Review/Review';
import WashingPrice from '../WashingPrice/WashingPrice';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WashingPrice></WashingPrice>
            <Location></Location>
            <Testimonials></Testimonials>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;