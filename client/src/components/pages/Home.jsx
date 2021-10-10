import React from 'react';
import Body from "../assets/Body/Body";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";
import Banner from "../assets/Banner/Banner";
import Cardlist from "../assets/Cardlist/Cardlist";



const Home = () => {
    return (
        <Container>
            <Header />
            <Body>
                <Banner/>
                <Cardlist/>
            </Body>
            <Footer />
        </Container>
    );
};

export default Home;