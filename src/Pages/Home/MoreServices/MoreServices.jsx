import { TbCalendarStats } from "react-icons/tb";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const MoreServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black p-10 text-white rounded-xl">
            <div className="flex gap-4">
                <div className="text-4xl text-orange-700">
                    <TbCalendarStats></TbCalendarStats>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <p>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="text-4xl text-orange-700">
                    <MdOutlinePermPhoneMsg></MdOutlinePermPhoneMsg>
                </div>
                <div>
                    <p>Have a question?</p>
                    <p>+2546 251 2658</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="text-4xl text-orange-700">
                    <IoLocationSharp></IoLocationSharp>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <p>7:00 am - 9:00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default MoreServices;