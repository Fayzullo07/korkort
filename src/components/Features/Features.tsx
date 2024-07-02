import Button from "../Core/Button"
import Container from "../Core/Container"
import Text from "../Core/Text"
import Title from "../Core/Title"

import features1 from "../../assets/images/features1.png"
import features2 from "../../assets/images/features2.png"

const Features = () => {
    return (
        <div className="min-h-screen rounded-tl-[64px] rounded-tr-[64px] py-5 pb-10">
            <Container>
                <div className="pb-5">
                    <Title title="Powerful Features That Set Us Apart and ahead" />
                    <Text text="Explore the frontier of coding evolution with Spectral Unleashed. Our latest features redefine the boundaries of what's possible in coding tools." />
                </div>

                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8">
                        <div className="space-y-4">
                            <div className="text-lg md:text-3xl max-w-md md:font-semibold">
                                Top Management, to help you
                                see the bigger picture
                            </div>
                            <p className="text-sm md:text-base text-gray-600 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas massa massa id arcu blandit dignissim contum
                                volutpat dolor fermentum, justo tempor.</p>
                            <div className="flex justify-start">
                                <Button text="Download App" icon={true} bgColorType="bg-[#D2FF00]" />
                            </div>
                        </div>
                        <div>
                            <img className="object-cover object-center rounded" alt="hero" src={features1} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8">
                        <div>
                            <img className="object-cover object-center rounded" alt="hero" src={features2} />
                        </div>
                        <div className="space-y-4">
                            <div className="text-lg md:text-3xl max-w-md md:font-semibold">
                                Top Management, to help you
                                see the bigger picture
                            </div>
                            <p className="text-sm md:text-base text-gray-600 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas massa massa id arcu blandit dignissim contum
                                volutpat dolor fermentum, justo tempor.</p>
                            <div className="flex justify-start">
                                <Button text="Download App" icon={true} bgColorType="bg-[#D2FF00]" />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Features