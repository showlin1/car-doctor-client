import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute top-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl text-white font-bold '>Affordable  Price For Car  Servicing</h2>
                        <p className='text-white text-xl '>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                        <div >
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute top-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl text-white font-bold '>Affordable  Price For Car  Servicing</h2>
                        <p className='text-white text-xl '>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                        <div >
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute top-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl text-white font-bold '>Affordable  Price For Car  Servicing</h2>
                        <p className='text-white text-xl '>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                        <div >
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute top-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl text-white font-bold '>Affordable  Price For Car  Servicing</h2>
                        <p className='text-white text-xl '>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
                        <div >
                            <button className="btn btn-warning mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;