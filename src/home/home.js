import { React, useState } from "react";
import Navbar from '../components/header/Navbar'
import Midcontainer from '../components/mid/Midcontainer'
import './home.css'
import About from "../components/about/About";
import Sidebar from '../components/sidebar/sidebar';
import Contact from '../components/contact/contact'
function Home() {
    const [isShifted, setIsShifted] = useState(false);

    const handleShiftClick = () => {
        setIsShifted(!isShifted);
    };
    
    return (
        <>
            <div className="outter_home">
                <Navbar onShiftClick={handleShiftClick} />
                <Sidebar isShifted={isShifted} />
                <Midcontainer></Midcontainer>
                <About></About>
                <Contact></Contact>
            </div>
        </>
    );
}
export default Home