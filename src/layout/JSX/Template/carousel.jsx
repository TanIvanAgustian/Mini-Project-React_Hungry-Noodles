import React from "react";
import Slider from "react-slick";
import Mie from "../../../assets/Foto Menu/Mie sumatra.jpg";
import Nasi from "../../../assets/Foto Menu/Nasi Goreng Spesial.jpg";
import Bihun from "../../../assets/Foto Menu/Bihun Spesial.jpg";
import CahMie from "../../../assets/Foto Menu/Cah Mie.jpg";
import Kwetiau from "../../../assets/Foto Menu/Kwetiau Spesial.jpg";
import MieGoreng from "../../../assets/Foto Menu/Mie Goreng Telur Spesial.jpg";

export default function Carousel(){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
            return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
            );
        }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
            return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
            );
        }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return <>
        <Slider {...settings}>
            <div>
                <center>
                    <img src={Mie} alt="" className="mt-3" style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} width={"100%"} height={"500px"}/>
                    <h3>Mie Sumatra</h3>
                    <p>Mie Khas sumatra dengan taburan daging diatasnya</p>
                </center>
            </div>
            <div>
                <center>
                    <img src={Nasi} alt="" className="mt-3" width={"100%"} style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} height={"500px"}/>
                    <h3>Nasi Goreng</h3>
                    <p>Nasi Goreng yang khas sumatra yang berisi perpaduan daging, udang, dan telur</p>
                </center>
            </div>
            <div>
                <center>
                    <img src={Kwetiau} alt="" className="mt-3" width={"100%"} style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} height={"500px"}/>
                    <h3>Kwetiau Goreng</h3>
                    <p>Kwetiau khas sumatra yang memadukan kwetiau basah dengan telur dan udang</p>
                </center>
            </div>
            <div>
                <center>
                    <img src={MieGoreng} alt="" className="mt-3" width={"100%"} style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} height={"500px"}/>
                    <h3>Mie Goreng Telur</h3>
                    <p>Versi mie goreng dari mie sumatra yang dilengkapi telur dan udang</p>
                </center>
            </div>
            <div>
                <center>
                    <img src={CahMie} alt="" className="mt-3" width={"100%"} style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} height={"500px"}/>
                    <h3>Cah Mie</h3>
                    <p>Mie kuah yang bertekstur tebal khas Sumatra yang memadukan daging dengan udang</p>
                </center>
            </div>
            <div>
                <center>
                    <img src={Bihun} alt="" className="mt-3" width={"100%"} style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} height={"500px"}/>
                    <h3>Bihun Goreng</h3>
                    <p>Bihun goreng Khas Sumatra yang beisikan daging dan udang dengan taburan daging merah</p>
                </center>
            </div>
        </Slider>
    </>
}