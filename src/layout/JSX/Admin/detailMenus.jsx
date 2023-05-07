import { useNavigate, useParams } from "react-router-dom"
import GraphQLMenu, { DeleteMenusById } from "../../../fetchData/graphQLMenus"
import { useEffect } from "react"
import AdminEditMenuForm from "./adminEditMenuForm"
import { useState } from "react"

let item = []

export default function DetailMenus(){

    const navigate = useNavigate()
    const { data } = GraphQLMenu()
    const { id } = useParams()
    console.log(data)
    const {DeleteMenuById} = DeleteMenusById()
    const [modalShow, setModalShow] = useState(false);

    const item = data?.Menus.filter((element)=> element.id === id)
    console.log(item)

    const handleDelete = (post) => {
        console.log("Deleting :"+post)
        DeleteMenuById({
            variables:{
                id: post
            }
        })
        navigate("/Homepage/Admin/Menus")
    }
    

    return <>
    <div className="row">
        {item?.map((post) => (
            <div className="col-10 rounded mx-auto mt-3 mb-3 bg-light p-3" key={post.id}>
                <div className="row">
                    <div className="col-7 text-center">
                        <h4>Product Image</h4>
                        <div className="mx-auto">
                            <img src={post.menuImage} width={"600px"} height={"475px"} alt="Gambar kosong" />
                        </div>
                    </div>
                    <div className="col-5 mt-5">
                        <h3>{post.menuName}</h3>
                        <h5 className="mt-3">Menu Description :</h5>
                        <p>{post.menuDescription}</p>
                        <div className="col-6 rounded-pill bg-info text-center p-2 mb-5 mt-5">
                            <h5>Harga : {post.menuPrice}</h5>
                        </div>
                        <span className="fs-6">Stock : </span>{post.menuAvailability? <span className="mb-3 fs-6 badge rounded-pill bg-primary">Tersedia</span> : <span className="mb-3 fs-6 badge rounded-pill bg-danger">Kosong</span>}
                        <div className="row text-center">
                            <button className="col me-3 btn btn-primary rounded-pill" onClick={() => setModalShow(true)}>Edit</button>
                            <button className="col me-4 btn btn-danger rounded-pill" onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                    </div>
                    <AdminEditMenuForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        src={post}
                    />
                </div>
            </div>
        ))}
    </div>
    
    </>
}