import { Outlet } from "react-router-dom"
import Logo from "../../../assets/BackgroundMie.webp";
import CarouselPage from "../Template/carousel";

export default function Root(){
    return <>
        <div
            className="row"
            style={{
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment:"fixed",
            width:"100%",
            position: "absolute",
            }}
        >
            <div className="col-6 col-lg-12 bg-light mt-4 mb-4 mx-auto" style={{width:"800px", borderRadius:"20px"}}>
                <div style={{width:"600px"}} className="mx-auto">
                    <CarouselPage/>
                </div>
            </div>
            <div className="col-3 bg-light mt-4 mb-4 mx-auto">
                <Outlet/>
            </div>
        </div>
        
    </>
}