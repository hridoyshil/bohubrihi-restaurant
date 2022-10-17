import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";


const MainComponent = () => {
    return (
        <div>
            <Body />
            <Footer />
            <Header />
        </div>
    );
}


export default MainComponent;