import { Carousel } from "react-bootstrap";
import Carousel1 from "../../../assets/Carousel/Carousel 1.jpg"
import Carousel2 from "../../../assets/Carousel/Carousel 2.jpg"

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
    </>
}