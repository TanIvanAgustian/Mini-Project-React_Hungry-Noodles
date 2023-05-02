import { Carousel } from "react-bootstrap";
import Carousel1 from "../../../assets/Carousel/Carousel 1.jpg"
import Carousel2 from "../../../assets/Carousel/Carousel 2.jpg"
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

    <div className="col-10 rounded mx-auto bg-dark mt-3 mb-3 p-5">
        <CarouselLandingPageUser/>
    </div>
    </>
}