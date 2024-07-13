import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, img, title, price } = service;
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
                        <Link to={`/book/${_id}`}>
                            <button className="btn text-orange-600"><FaArrowRight></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;