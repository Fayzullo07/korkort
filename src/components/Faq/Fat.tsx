import Container from "../Core/Container";
import Title from "../Core/Title";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import Text from "../Core/Text";


const Faq = () => {
    return (
        <div className="py-5 pb-10">
            <Container>
                <div>
                    <div className="py-5 pb-10">
                        <Title title="FAQ" />
                        <Text text="Whether you're curious about Silk's features, data handling capabilities, orintegration options, we've got you covered." />
                    </div>
                    <div className="space-y-8">
                        <Accordion type="single" collapsible className="w-full" data-aos="fade-up">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-4">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                                <div className="space-y-4">
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It's animated by default, but you can disable it if you prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>


                            </div>
                        </Accordion>
                        <div className="p-8 border bg-[#D2FF00] rounded-3xl" data-aos="fade-up">
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <div className="flex-grow space-y-2">
                                    <div className="text-xl md:text-2xl font-semibold">Still have questions?</div>
                                    <p className=" text-base md:text-lg ">
                                        {"Can’t find the answer you’re looking for? Please chatto our friendly team."}
                                    </p>
                                </div>
                                <button className={` bg-white  md:w-auto text-center mx-auto w-full items-center py-2 px-4 shadow-md  rounded-[30px]`}>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Faq;