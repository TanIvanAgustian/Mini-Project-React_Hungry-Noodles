import GraphQLMenu from "../../../fetchData/graphQLMenus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accordion } from "react-bootstrap"
import { AddToCart } from "../../../fetchData/graphQLCart"
import { getAuthCookie } from "../../../utils/cookies"

export default function ListMenusUser(){
    
    const {data} = GraphQLMenu()

    const Food = data?.Menus.filter((element) => element.menuCategory =="Makanan")
    const Drink = data?.Menus.filter((element) => element.menuCategory =="Minuman")
    const Snack = data?.Menus.filter((element) => element.menuCategory =="Snack")

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
            alert("Pembelian dibatalkan")
        }
    }

    return<>
        <Accordion>
                <Accordion.Item eventKey={"1"} className="border border-primary rounded-3 ">
                    <Accordion.Header>
                        <div className="row">
                            <h3>
                            <FontAwesomeIcon icon={["fas","bowl-food"]} fixedWidth/> List Food
                            </h3>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-dark">
                    <div className="row col-11 mx-auto row-cols-1 row-cols-md-2 g-4">
                        {Food?.map((post) => (
                            <div className="col">
                                <div className="card mb-3 p-3 h-100">
                                    <div className="row g-0 mx-auto">
                                        <div className="col-md-4">
                                            <img src={post.menuImage} height={"150px"} width={"100%"} className="rounded align-middle" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{post.menuName}</h4>
                                                <p>{post.menuDescription}</p>
                                                <h5>Harga : {post.menuPrice}</h5>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            {post.menuAvailability ? <button className="btn btn-primary float-end" onClick={() => handleAddCart(post)}><FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/> Add to Cart</button> : <button className="btn btn-secondary float-end" disabled><FontAwesomeIcon icon={["fas","sad-cry"]} fixedWidth/> Product Habis</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
        
        <Accordion>
                <Accordion.Item eventKey={"1"} className="border border-primary rounded-3 ">
                    <Accordion.Header>
                        <div className="row">
                            <h3>
                            <FontAwesomeIcon icon={["fas","wine-glass"]} fixedWidth/> List Drink
                            </h3>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-dark">
                    <div className="row col-11 mx-auto row-cols-1 row-cols-md-2 g-4">
                        {Drink?.map((post) => (
                            <div className="col">
                                <div className="card mb-3 p-3 h-100">
                                    <div className="row g-0 mx-auto">
                                        <div className="col-md-4">
                                            <img src={post.menuImage} height={"150px"} width={"100%"} className="rounded align-middle" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{post.menuName}</h4>
                                                <p>{post.menuDescription}</p>
                                                <h5>Harga : {post.menuPrice}</h5>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            {post.menuAvailability ? <button className="btn btn-primary float-end" onClick={() => handleAddCart(post)}><FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/> Add to Cart</button> : <button className="btn btn-secondary float-end" disabled><FontAwesomeIcon icon={["fas","sad-cry"]} fixedWidth/> Product Habis</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>

        <Accordion>
                <Accordion.Item eventKey={"1"} className="border border-primary rounded-3 ">
                    <Accordion.Header>
                        <div className="row">
                            <h3>
                            <FontAwesomeIcon icon={["fas","cookie"]} fixedWidth/> List Snack
                            </h3>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-dark">
                    <div className="row col-11 mx-auto row-cols-1 row-cols-md-2 g-4">
                        {Snack?.map((post) => (
                            <div className="col">
                                <div className="card mb-3 p-3 h-100">
                                    <div className="row g-0 mx-auto">
                                        <div className="col-md-4">
                                            <img src={post.menuImage} height={"150px"} width={"100%"} className="rounded align-middle" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{post.menuName}</h4>
                                                <p>{post.menuDescription}</p>
                                                <h5>Harga : {post.menuPrice}</h5>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            {post.menuAvailability ? <button className="btn btn-primary float-end" onClick={() => handleAddCart(post)}><FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/> Add to Cart</button> : <button className="btn btn-secondary float-end" disabled><FontAwesomeIcon icon={["fas","sad-cry"]} fixedWidth/> Product Habis</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    </>
}