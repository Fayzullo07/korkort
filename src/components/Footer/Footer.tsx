import Container from "../Core/Container"

const Footer = () => {
    return (
        <div>
            <Container>
                <div className="flex justify-between items-center py-10 px-5 bg-white">
                    <div className="text-sm font-semibold uppercase">
                        Created by <span className=" underline">ONIC</span>
                    </div>
                    <div className=" uppercase text-sm font-semibold underline">
                        körkort
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer