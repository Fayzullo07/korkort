import { ArrowRightIcon } from "lucide-react";

const Button = ({ text = "", icon = false, bgColorType = ""}) => {
    const bgColor = bgColorType ? "bg-[#D2FF00]" : "bg-white";
    return (
        <button className={`flex items-center gap-[7.69px] py-[9px] px-[18px] shadow-md ${bgColor} rounded-[30px]`}>
            <span className="text-[#000] text-[14px] leading-[16.8px]">
                {text}
            </span>
            {icon && (
                <ArrowRightIcon className="w-5 h-5 text-[#000]" />
            )}
        </button>
    )
}

export default Button;