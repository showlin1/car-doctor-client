import Banner from "../Banner/Banner";
import About from "./About/About";
import MoreServices from "./MoreServices/MoreServices";
import Products from "./Products/Products";
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
            <div className="mb-16">
                <MoreServices></MoreServices>
            </div>
            <div className="mb-16">
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;