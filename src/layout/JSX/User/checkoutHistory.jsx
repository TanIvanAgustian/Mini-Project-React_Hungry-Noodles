import GetAllCheckout, { DeleteCheckoutById } from "../../../fetchData/graphQLCheckout";
import { getAuthCookie } from "../../../utils/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CheckoutHistory(){
    const {data} = GetAllCheckout()
    const token = getAuthCookie()
    const myHistory = data?.Checkout.filter((element) => element.user_ID == token)
    const {deleteData} = DeleteCheckoutById()

    const handleDelete = (idx) => {
        deleteData({
            variables:{
                id : idx
            }
        })
    }

    const checkoutItem = (post) => {
        var item = []
        var number = 1
        for (var i = 0; i < post.order.length; i++) {
            item.push(
            <div className="row mb-2">
                <div className="col-1">
                <h6 className="my-0 ms-3">{number}.</h6>
                </div>
                <div className="col-8">
                    <h6 className="my-0 ms-3">{post.order[i]}</h6>
                </div>
                <div className="col">
                    <h6 className="my-0 ms-3">: x{post.orderAmount[i]}</h6>
                </div>
            </div>
            );
            number++
        }
        return item
    }

    const handleStatus = (post) => {
        var item = []
        if (post.cancelation == false && post.confirmation == false){
            item.push(
                <button className="btn btn-danger rounded-3" onClick={() => handleDelete(post.id)}><FontAwesomeIcon icon={["fas","xmark"]} fixedWidth/>Batalkan</button>
            )
        }
        else if (post.cancelation == true) {
            item.push(
                <span className="badge bg-danger rounded-3"><FontAwesomeIcon icon={["fas","xmark"]} fixedWidth/>Ditolak</span>
            )
        }
        else if (post.confirmation == true) {
            item.push(
                <span className="badge bg-success rounded-3"><FontAwesomeIcon icon={["fas","check"]} fixedWidth/>Confirmed</span>
            )
        }
        return item
    }
    
    return <>
        <div className=" col-11 mx-auto bg-dark mt-3 mb-3">
            <h3 className="text-center text-light p-3">My Checkout History</h3>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-around lh-condensed col-11 mx-auto" key={"title"}>
                    <h5 className="text-center">User</h5>
                    <h5 className="text-center">Food</h5>
                </li>
                {myHistory?.map((post) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed col-11 mx-auto" key={post.id}>
                        <div>
                        <div className="event-img d-flex justify-content-between">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width={"100px"} alt="" />
                            <div className="align-self-center">
                                <div className="row">
                                    <div className="col-3">
                                        <h6 className="my-0 ms-3">Username</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="my-0 ms-3">: {post.userName}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <h6 className="my-0 ms-3">Email</h6>
                                    </div>
                                    <div className="col">
                                    <h6 className="my-0 ms-3">: {post.email}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <h6 className="my-0 ms-3">Address</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="my-0 ms-3">: {post.address}</h6>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div className="align-self-center">
                            {checkoutItem(post)}
                        </div> 
                        <div className="align-self-end">
                            <span className="me-3">Rp. {post.totalPayment}</span>
                            {handleStatus(post)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </>
}