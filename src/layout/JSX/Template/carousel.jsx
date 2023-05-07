import React from "react";
import Slider from "react-slick";
import GraphQLMenu from "../../../fetchData/graphQLMenus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuthCookie } from "../../../utils/cookies";
import { AddToCart } from "../../../fetchData/graphQLCart";

export default function CarouselLogin(){

    const {data} = GraphQLMenu()

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
            {data?.Menus.map((post) => (
                <div>
                    <center>
                        <img src={post.menuImage} alt="" className="mt-3" style={{paddingLeft:"10px", borderRadius:"30px", paddingRight:"10px"}} width={"100%"} height={"500px"}/>
                        <h3>{post.menuName}</h3>
                        <p>{post.menuDescription}</p>
                    </center>
                </div>
            ))}
            
        </Slider>
    </>
}

export function CarouselLandingPageUser(){

    const {data} = GraphQLMenu()

    const {AddCart} = AddToCart()
    const token = getAuthCookie()

    const handleAddCart = (item) => {
        var Buy = confirm("Apakah Yakin Membeli "+item.menuName)
        if(Buy){
            AddCart({
                variables: {
                    object: {
                        menuName : item.menuName,
                        menuPrice : item.menuPrice,
                        menuAllPrice : item.menuPrice,
                        user_ID : token,
                        menu_ID : item.id
                    }
                }
            })
            console.log("harusnya masuk")
        }
        else{
            setTimeout(() => {
                alert("Pembelian dibatalkan")
            }, 2000);
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        cssEase: "linear",
    };
    return (
        <div>
            <h2 className="text-center text-light mb-3">Our Products</h2>
            <Slider {...settings}>
                {data?.Menus.map((post) => (  
                    <div className="card mb-3 p-3">
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src={post.menuImage} height={"140px"} width={"100%"} className="rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h4 className="card-title">{post.menuName}</h4>
                            <h5 className="card-text">{post.menuPrice}</h5>
                            <button className="btn btn-primary float-end mt-3" onClick={() => handleAddCart(post)}><FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/>Add to Cart</button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}