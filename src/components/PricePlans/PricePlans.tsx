import { CheckIcon } from "lucide-react"
import Container from "../Core/Container"
import Title from "../Core/Title"

const PricePlans = () => {
    return (
        <div className="min-h-screen  py-5 pb-10">
            <Container>
                <div>
                    <div className="mb-5 md:mb-10">
                        <Title title="Unlocking Value tailored Pricing Plans for Success" />
                        <p className="text-base max-w-xl mx-auto text-center text-gray-500 py-5">Explore the frontier of coding evolution with Spectral Unleashed. Our latest
                            features redefine the boundaries of what's possible in coding tools.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">


                        {/* Basic plan */}
                        <div
                            className="flex border flex-col max-w-lg p-8 px-12  text-center text-gray-900 bg-white  border-gray-100 rounded-lg shadow dark:border-gray-600 ">

                            <div className="flex flex-col items-center justify-center my-8 space-y-4">
                                <span className="text-5xl font-semibold">$49 USD</span>
                                <span className=" font-semibold text-base">Basic plan</span>
                                <span className=" font-semibold text-[10px]">Billed annually.</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <button className=" bg-gray-200  text-center  w-full items-center py-2 px-4 shadow-md  rounded-[30px]">
                                Get started
                            </button>
                        </div>

                        {/* Business plan */}
                        <div
                            className="Md:scale-110 flex border flex-col max-w-lg p-8 px-12  text-center text-white bg-[#090B15]  border-gray-100 rounded-lg shadow dark:border-gray-600 ">

                            <div className="flex flex-col items-center justify-center my-8 space-y-4">
                                <span className="text-5xl font-semibold">$79 USD</span>
                                <span className=" font-semibold text-base">Business plan</span>
                                <span className=" font-semibold text-[10px]">Billed annually.</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <button className=" bg-[#D2FF00]  text-center  w-full items-center py-2 px-4 shadow-md  rounded-[30px] text-black">
                                Get started
                            </button>
                        </div>

                        {/* Enterprise plan */}
                        <div
                            className="flex border flex-col max-w-lg p-8 px-12  text-center text-gray-900 bg-white  border-gray-100 rounded-lg shadow dark:border-gray-600 ">

                            <div className="flex flex-col items-center justify-center my-8 space-y-4">
                                <span className="text-5xl font-semibold">$90 USD</span>
                                <span className=" font-semibold text-base">Enterprise plan</span>
                                <span className=" font-semibold text-[10px]">Billed annually.</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <div className="p-1 bg-[#D2FF00] rounded-md">

                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <button className=" bg-gray-200  text-center  w-full items-center py-2 px-4 shadow-md  rounded-[30px]">
                                Get started
                            </button>
                        </div>



                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PricePlans