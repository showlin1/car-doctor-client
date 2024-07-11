import product1 from '../../../assets/images/products/1.png';
import product2 from '../../../assets/images/products/2.png';
import product3 from '../../../assets/images/products/3.png';
import product4 from '../../../assets/images/products/4.png';
import product5 from '../../../assets/images/products/5.png';
import product6 from '../../../assets/images/products/6.png';
import { FaStar } from "react-icons/fa";

const Products = () => {
    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl text text-orange-600 font-bold mb-4">Popular Products</h3>
                <h2 className="text-3xl mb-4 font-bold">Browse Our Products</h2>
                <p className="mb-10">the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                            <img
                                src={product1}
                                className="rounded-xl" />
                        </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Car Engine Plug</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                        <img
                            src={product2}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Car Air Filter</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                        <img
                            src={product3}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Cools Led Light</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                        <img
                            src={product4}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Cools Led Light</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                        <img
                            src={product5}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Cools Led Light</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 bg-base-200 rounded-t-xl">
                        <img
                            src={product6}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-orange-700'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <p className='text-xl font-bold'>Cools Led Light</p>
                        <p className='text-orange-600 font-bold'>$20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;