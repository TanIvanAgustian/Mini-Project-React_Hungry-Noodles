import { useNavigate } from "react-router-dom";
import { DeleteMenusById, GraphQLSnack, UpdateAvailability } from "../../../fetchData/graphQLMenus"
import { Accordion } from "react-bootstrap";

export default function ListSnacks(){
    const navigate = useNavigate()
    const {data} = GraphQLSnack()
    const {UpdateMenuAvailability} = UpdateAvailability()

    const handleAvailability = (item) => {
        UpdateMenuAvailability({
            variables:{
                id: item.id,
                menuAvailability: !item.menuAvailability
            }
        })
    }
    return <>
        <Accordion>
            {data?.Menus.map((post) =>(
                    <Accordion.Item eventKey={post.id} className="border border-primary rounded-3">
                        <Accordion.Header>
                            <img src={post.menuImage} className="rounded-circle" width={"40px"} height={"40px"} alt="Gagal Load"></img>
                            <h5 className="ml-3">{post.menuName}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="row mb-3">
                            <tr>
                                <th scope="row">Deskripsi</th>
                                <td>: {post.menuDescription}</td>
                            </tr>
                            <tr>
                            <th scope="row">Harga</th>
                                <td>: RP.{post.menuPrice}</td>
                            </tr>
                                    
                            </div>
                            <div className="row my-auto">
                                <div className="col-6">
                                    <button className="btn btn-primary rounded-pill" onClick={() => navigate("/Homepage/Admin/AddMenus/"+post.id)}>Edit This Menu</button>
                                </div>
                                <div className="col-6">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" for="flexSwitchCheckDefault" >Availability </label>
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={post.menuAvailability} onClick={() => handleAvailability(post)}/>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
            ))}
        
        </Accordion>
    </>
}