import Container from "../Core/Container";
import blurPhone from "../../assets/Blur.png";
import heroBackgroundImage from "../../assets/images/hero-background.png";
import Button from "../Core/Button";

const FooterHero = () => {
    return (
        <div className="relative  py-5 pb-10">
            <div
                className="absolute inset-x-0 -top-[40px] h-full  bg-no-repeat bg-center z-[-1]"
                style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            ></div>
            <Container>
                <div className="space-y-6 mb-6">


                    <div className="flex justify-center z-[20]" data-aos="fade-up">
                        <img src={blurPhone} alt="phone image" />
                    </div>
                    <div className="">
                        <h1 className="text-[#000] max-w-xl mx-auto text-center md:font-medium text-4xl  md:text-6xl mb-[24px]" data-aos="fade-up">
                            Experience the
                            Future of Finance!
                        </h1>
                        <p className="text-[#585858] max-w-[577px] text-center text-sm md:text-base mx-auto" data-aos="fade-up">
                            Discover the power of LimeDashboard and take control of your productivity. Streamline your tasks,
                            collaborate seamlessly, and drive success like never before.
                        </p>
                    </div>
                    <div className="flex gap-[12px] justify-center items-baseline mb-[70px]">
                        <Button text="Download App" icon={true} bgColorType="bg-[#D2FF00]" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FooterHero;