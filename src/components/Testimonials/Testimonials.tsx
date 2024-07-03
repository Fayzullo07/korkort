import Container from "../Core/Container"
import Title from "../Core/Title"
import { testimonialsData } from "../data/data"

const Testimonials = () => {
    return (
        <div className=" bg-[#D2FF00] rounded-tl-[64px] rounded-tr-[64px] py-5 pb-10">
            <Container>
                <div className="text-gray-600 ">
                    <div className="mb-2">
                        <Title title="Voices of Innovation, Testimonials" />
                    </div>
                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {testimonialsData.map((item, index) => (
                            <div key={index}
                                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
                            >
                                <p className="mb-8">
                                    {item.text}
                                </p>
                                <div className="flex gap-4">
                                    <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                    </div>
                                </div>
                            </div>
                        ))}





                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials