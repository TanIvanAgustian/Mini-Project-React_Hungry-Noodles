import { Outlet } from "react-router-dom"
import Background from '../../../assets/BackgroundMie.webp'
import CarouselLogin from "../Template/carousel"

export default function Root(){
    return <>
    <div className="row">
        <div className="col-6 col-lg-12 bg-light mt-4 mb-4 mx-auto" style={{width:"800px", borderRadius:"20px"}}>
            <div style={{width:"600px"}} className="mx-auto">
                <CarouselLogin/>
            </div>
        </div>
        <div className="col-3 bg-light mt-4 mb-4 mx-auto">
            <Outlet/>
        </div>
    </div>
    </>
}