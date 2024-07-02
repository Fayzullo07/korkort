const Text = ({ text = "" }) => {
    return (
        <div className="text-sm md:text-base max-w-xl mx-auto text-center text-gray-400 py-2">
            {text}
        </div>
    )
}

export default Text;