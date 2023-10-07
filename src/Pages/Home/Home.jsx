import React from 'react';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ApplicationForm from './ApplicationForm/ApplicationForm';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <ApplicationForm />
            <Newsletter />
        </div>
    );
};

export default Home;