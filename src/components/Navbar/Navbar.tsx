import logo from "../../assets/Link.svg"
import Container from "../Core/Container"

const Navbar = () => {
    return (
        <div>
            <Container>
                <div className={"flex items-center justify-between py-[23.5px] mb-[44px]"} data-aos="fade-up">
                    <div>
                        <img src={logo} alt={"logo"} />
                    </div>
                    <div>
                        <button
                            className={
                                "px-4 py-1 hover:px-6 hover:shadow-md duration-300 bg-[#ECF0F6] rounded-[30px] border-[1px] border-solid border-[#F3F5F7] shadow-md"
                            }
                        >
                            <span className={"text-base text-[#000]"}>
                                Sign in
                            </span>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar