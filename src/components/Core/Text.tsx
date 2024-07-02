const Text = ({ text = "" }) => {
    return (
        <div className="text-sm md:text-base max-w-xl mx-auto text-center text-gray-400 py-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            {text}
        </div>
    )
}

export default Text;