const Title = ({ title = "" }) => {
    return (
        <div className="py-2 md:py-4 md:pb-8 text-xl 2xl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl font-medium text-center max-w-2xl mx-auto text-black tracking-wider md:font-semibold" data-aos="fade-up"  data-aos-duration="1000">
            {title}
        </div>
    )
}

export default Title;