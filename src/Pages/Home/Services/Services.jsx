import { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500 mb-4">Service</h3>
                <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
                <p className="mb-8">the majority have suffered alteration in some form, by injected humour,
                    or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                <p>services{services.length}</p>
            </div>
        </div>
    );
};

export default Services;