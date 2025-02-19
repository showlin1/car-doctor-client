// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

// DRY --> do not repeat yourSelf
const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500 mb-4">Service</h3>
                <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
                <p className="mb-8">the majority have suffered alteration in some form, by injected humour,
                    or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;