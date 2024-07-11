import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {img,title,price}=service;
    return (
        <div>
            <div className="card bg-base-100 w-96 lg:h-[400px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex justify-end">
                        <p className="text-xl text-orange-600 font-bold">Price : ${price}</p>
                        <button className="btn text-orange-600"><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;