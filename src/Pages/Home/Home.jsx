import Banner from "../Banner/Banner";
import About from "./About/About";


const Home = () => {
    return (
        <div>
            <div className="mb-16">
                <Banner></Banner>
            </div>
            <div className="mb-16">
                <About></About>
            </div>
        </div>
    );
};

export default Home;