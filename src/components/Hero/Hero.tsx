import Container from "../Core/Container";
import phoneImage from "../../assets/images/phone.png";
import heroBackgroundImage from "../../assets/images/hero-background.png";
import Button from "../Core/Button";

const Hero = () => {
    return (
        <div className="relative">
            <div
                className="absolute inset-x-0 -top-[40px] h-full  bg-no-repeat bg-center z-[-1]"
                style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            ></div>
            <Container>
                <div className="space-y-6 mb-6">
                    <div className="">
                        <h1 className="text-[#000] text-center md:font-medium leading-[72px] text-[54px] mb-[24px]" data-aos="zoom-out-down" data-aos-delay="100" data-aos-duration="1000">
                            Smart Crypto Management
                        </h1>
                        <p className="text-[#585858] max-w-[577px] text-center leading-[22.4px] text-[16px] mx-auto" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            Unlock the power of Lime and take control of your crypto portfolio
                            like never before. With intuitive tools and insightful analytics.
                        </p>
                    </div>
                    <div className="flex gap-[12px] justify-center items-baseline mb-[70px]">
                        <Button text="Contact Us" icon={true} />
                        <Button text="Download App" icon={true} bgColorType="bg-[#D2FF00]" />
                    </div>
                    <div className="flex justify-center z-[20]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <img src={phoneImage} alt="phone image" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;