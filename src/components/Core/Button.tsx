import { ArrowRightIcon } from "lucide-react";

const Button = ({ text = "", icon = false, bgColorType = ""}) => {
    const bgColor = bgColorType ? "bg-[#D2FF00]" : "bg-white";
    return (
        <button className={`flex items-center gap-[7.69px] py-[9px] px-[18px] duration-300 shadow-md ${bgColor} rounded-[30px] hover:px-6 hover:shadow-xl duration-300`} >
            <span className="text-[#000] text-base">
                {text}
            </span>
            {icon && (
                <ArrowRightIcon className="w-5 h-5 text-[#000]" />
            )}
        </button>
    )
}

export default Button;