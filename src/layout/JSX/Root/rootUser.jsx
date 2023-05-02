import Header from "../Template/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Template/footer"
import Background from '../../../assets/BackgroundMie.webp'

export default function RootUser(){
    return <>
        <div
            style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment:"fixed",
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: "100%"
            }}
        >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
}