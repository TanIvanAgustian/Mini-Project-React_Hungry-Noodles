import { Carousel } from "react-bootstrap";
import Carousel1 from "../../../assets/Carousel/Carousel 1.jpg"
import Carousel2 from "../../../assets/Carousel/Carousel 2.jpg"
import Logo from "../../../assets/Logo.png"
import { CarouselLandingPageUser } from "../Template/carousel";

export default function UserLandingPage(){
    return<>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Carousel2}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>

    <div className="bg-dark d-flex text-light justify-content-around p-3">
        <div className="col-3">
            <img src={Logo} width={"100%"}/>
        </div>
        <div className="text-center align-self-center col-5">
            <h3>About Us</h3>
            <p>Warung Mie Sumatra Hoklai adalah usaha yang dijalankan oleh sepasang suami istri yang berdomisili di Semarang, warung ini sudah dibangun sejak tahun 2013. pemilik warung memilih untuk menjual Mie Sumatra karena merupakan makanan khas daerah lahirnya</p>
        </div>
    </div>

    <div className="col-10 rounded mx-auto bg-dark mt-3 mb-3 p-5">
        <CarouselLandingPageUser/>
    </div>
    </>
}