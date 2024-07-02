import Container from "../Core/Container"
import Text from "../Core/Text"
import Title from "../Core/Title"

const Insights = () => {
    return (
        <div>
            <Container>
                <div>
                    <div className="py-5 pb-10">
                        <Title title="Insights & Inspiration" />
                        <Text text="Dive into the heart of innovation with our 'Coding Chronicles' blog section. Explore a rich tapestry of articles, tutorials, and insights that unravel." />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">
                        {Array.from({ length: 3 }, (_, i) => i).map((i) => (
                            <div key={i}
                                className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal hover:cursor-pointer " data-aos="fade-up" data-aos-delay={i + 1 * 100} data-aos-duration={i * 1000}>
                                <div className="overflow-hidden rounded-xl">

                                    <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-full rounded-xl hover:scale-110 transition-all duration-500" />
                                </div>
                                <div className="space-y-2 py-2 md:py-4">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        April 8, 2023
                                    </p>
                                    <div className="text-gray-900 font-bold text-base md:text-lg mb-2  inline-block">Can
                                        coffee make you a better developer?</div>
                                    <p className="text-gray-500 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Insights