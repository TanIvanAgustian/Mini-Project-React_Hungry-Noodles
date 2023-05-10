import Logo from "../../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="">
            {/* Footer */}
            <footer className="text-center text-lg-start text-white bg-dark">
            {/* Section: Social media */}
            <section
                className="d-flex justify-content-between p-1"
                style={{ backgroundColor: "#6351ce" }}
            >
                <div>
                <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-twitter" />
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-google" />
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-instagram" />
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin" />
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-github" />
                </a>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}
            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <h6 className="text-uppercase fw-bold">
                        <img src={Logo} width={"50px"} />
                        Mie Sumatra Hoklai
                    </h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p>Official Website of Mie Sumatra Hoklai</p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p className="text-white">Mie Sumatra Biasa</p>
                    <p className="text-white">Nasi Goreng Spesial</p>
                    <p className="text-white">Kwetiau Spesial</p>
                    <p className="text-white">Bihun Spesial</p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p>
                        <a href="/Homepage" className="text-white">
                        HomePage
                        </a>
                    </p>
                    <p>
                        <a href="/Homepage/Menus" className="text-white">
                        Product List
                        </a>
                    </p>
                    <p>
                        <a href="/Homepage/Cart" className="text-white">
                        Cart
                        </a>
                    </p>
                    <p>
                        <a href="/Homepage/History" className="text-white">
                        Checkout History
                        </a>
                    </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p>
                        <FontAwesomeIcon icon={["fas", "map-location-dot"]} />{" "}
                        Semarang, Central Java, Indonesia
                    </p>
                    <p>
                        <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                        MieSumatraHoklai@gmail.com
                    </p>
                    <p>
                        <FontAwesomeIcon icon={["fas", "phone"]} /> +62
                        877-0051-7227
                    </p>
                    <p>
                        <FontAwesomeIcon icon={["fas", "phone"]} /> +62 897-9986-887
                    </p>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}
            </footer>
            {/* Footer */}
        </div>
        {/* End of .container */}
        </>
    );
}
