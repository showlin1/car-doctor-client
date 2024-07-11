import Banner from "../Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
            <div className="mb-16">
                <Banner></Banner>
            </div>
            <div className="">
                <About></About>
            </div>
            <div className="mb-16">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;