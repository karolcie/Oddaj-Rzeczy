import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAbout from "./HomeAbout";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />

            <HomeAbout />
        </>
    );
};

export default Home;