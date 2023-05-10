import GetAllCheckout, { CancelCheckoutById, ConfirmCheckoutById, } from "../../../fetchData/graphQLCheckout";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CheckoutList() {
    const { data } = GetAllCheckout();
    const { cancelCheckout } = CancelCheckoutById();
    const { confirmCheckout } = ConfirmCheckoutById();

    const checkoutItem = (post) => {
        var item = [];
        var number = 1;
        for (var i = 0; i < post.order.length; i++) {
        item.push(
            <div className="row mb-2">
            <div className="col-1">
                <h6 className="my-0 ms-3">{number}.</h6>
            </div>
            <div className="col-8">
                <h6 className="my-0 ms-3"> {post.order[i]}</h6>
            </div>
            <div className="col">
                <h6 className="my-0 ms-3">: x{post.orderAmount[i]}</h6>
            </div>
            </div>
        );
        number++;
        }
        return item;
    };

    const handleCancel = (idx) => {
        cancelCheckout({
        variables: {
            id: idx,
        },
        });
    };

    const handelConfirm = (idx) => {
        confirmCheckout({
        variables: {
            id: idx,
        },
        });
    };

    const handleAction = (post) => {
        var item = [];
        if (post.cancelation == false && post.confirmation == false) {
        item.push(
            <div className="col-5 ms-3 mt-3 d-flex">
            <button
                className="btn btn-danger w-100 me-2"
                onClick={() => handleCancel(post.id)}
            >
                <FontAwesomeIcon icon={["fas", "xmark"]} fixedWidth />
                Tolak
            </button>
            <button
                className="btn btn-success w-100"
                onClick={() => handelConfirm(post.id)}
            >
                <FontAwesomeIcon icon={["fas", "check"]} fixedWidth />
                Terima
            </button>
            </div>
        );
        } else if (post.cancelation == true) {
        item.push(
            <span
            className="badge bg-danger rounded-3 p-2 mt-3"
            class="badge bg-danger"
            >
            <FontAwesomeIcon icon={["fas", "xmark"]} fixedWidth />
            Ditolak
            </span>
        );
        } else if (post.confirmation == true) {
        item.push(
            <span
            className="badge bg-success rounded-3 p-2 mt-3"
            class="badge bg-success"
            >
            <FontAwesomeIcon icon={["fas", "check"]} fixedWidth />
            Confirmed
            </span>
        );
        }
        return item;
    };

    return (
        <>
        <div className=" col-11 mx-auto bg-dark mt-3 mb-3 p-2">
            <h3 className="text-center text-light p-3">Checkout List</h3>
            <ul className="list-group">
            <li
                className="list-group-item d-flex justify-content-around lh-condensed col-11 mx-auto"
                key={"title"}
            >
                <h5 className="text-center">User</h5>
                <h5 className="text-center">Food</h5>
            </li>
            <Accordion className="list-group-item lh-condensed col-11 mx-auto">
                {data?.Checkout.map((post, index) => (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header className="row">
                    <li
                        className="d-flex justify-content-between col"
                        key={post.id}
                    >
                        <div>
                        <div class="event-img d-flex justify-content-between">
                            <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            width={"60px"}
                            className="align-self-center"
                            alt=""
                            />
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
                                <h6 className="my-0 ms-3">Phone</h6>
                                </div>
                                <div className="col">
                                <h6 className="my-0 ms-3">
                                    : {post.phoneNumber}
                                </h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="align-self-center">
                        {checkoutItem(post)}
                        </div>
                        <div className="align-self-center me-3">
                        <h6>{post.totalPayment}</h6>
                        </div>
                    </li>
                    </Accordion.Header>
                    <Accordion.Body>
                    <h3 className="text-center">Bukti Pembayaran:</h3>
                    <div className="row">
                        <div className="col-4">
                        <img src={post.payment} alt="" width={"100%"} />
                        </div>
                        <div className="col mt-3">
                        <div className="row">
                            <div className="col-3">
                            <h6 className="my-0 ms-3">Provinsi</h6>
                            </div>
                            <div className="col">
                            <h6 className="my-0 ms-3">: {post.province}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <h6 className="my-0 ms-3">Kota</h6>
                            </div>
                            <div className="col">
                            <h6 className="my-0 ms-3">: {post.city}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <h6 className="my-0 ms-3">Alamat</h6>
                            </div>
                            <div className="col">
                            <h6 className="my-0 ms-3">: {post.address}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <h6 className="my-0 ms-3">Kode Pos</h6>
                            </div>
                            <div className="col">
                            <h6 className="my-0 ms-3">: {post.postalCode}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <h6 className="my-0 ms-3">Total Biaya</h6>
                            </div>
                            <div className="col">
                            <h6 className="my-0 ms-3">
                                : RP.{post.totalPayment}
                            </h6>
                            </div>
                        </div>
                        <div className="row">{handleAction(post)}</div>
                        </div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion>
            </ul>
        </div>
        </>
    );
}
