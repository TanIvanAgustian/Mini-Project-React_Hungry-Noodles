import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowCart, { UpdateAmount, DeleteCartByID, UpdateCheck } from "../../../fetchData/graphQLCart";
import { getAuthCookie } from "../../../utils/cookies";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { data } = ShowCart();
    const { UpdateMenuAmount } = UpdateAmount();
    const { DeleteCart } = DeleteCartByID();
    const { UpdateChecked } = UpdateCheck();
    const [modalShow, setModalShow] = useState(false);
    const token = getAuthCookie();
    const navigate = useNavigate();

    const myCart = data?.Cart.filter((element) => element.user_ID == token);
    const user = data?.Users.filter((element) => element.Id == token);

    const handleMenu = (item) => {
        const Menu = data?.Menus.filter((element) => element.id == item);
        return Menu[0];
    };

    const handlePlus = (item) => {
        UpdateMenuAmount({
        variables: {
            id: item.id,
            object: {
            menuAmount: item.menuAmount + 1,
            menuAllPrice: item.menuPrice * (item.menuAmount + 1),
            },
        },
        });
    };

    const handleMinus = (item) => {
        if (item.menuAmount == 1) {
        handleDelete(item.id);
        } else {
        UpdateMenuAmount({
            variables: {
            id: item.id,
            object: {
                menuAmount: item.menuAmount - 1,
                menuAllPrice: item.menuPrice * (item.menuAmount - 1),
            },
            },
        });
        }
    };

    const handleDelete = (idx) => {
        const hapus = confirm("Apakah Yakin Hapus Data dari Cart Belanja anda?");
        if (hapus) {
        DeleteCart({
            variables: {
            id: idx,
            },
        });
        } else {
        alert("Data Tidak Jadi Dihapus");
        }
    };

    const handleCheck = (item) => {
        UpdateChecked({
        variables: {
            id: item.id,
            Check: !item.Check,
        },
        });
    };

    const handleCheckout = () => {
        navigate("/Homepage/Cart/CheckOut");
    };

    return (
        <>
        <section className="h-100 rounded col-11 mx-auto bg-dark mb-3 mt-3">
            <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                <div className="d-flex text-light align-items-center mb-4">
                    <FontAwesomeIcon icon={["fas", "cart-shopping"]} fixedWidth />
                    <h3 className="fw-normal mb-0 ms-3">Shopping Cart</h3>
                </div>
                {myCart?.map((post) => (
                    <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                            src={handleMenu(post.menu_ID).menuImage}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                            />
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <p className="lead fw-normal mb-2">{post.menuName}</p>
                            <p>
                            <span className="text-muted">Price: </span>
                            {post.menuPrice}
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                            className="btn btn-danger rounded-circle px-2"
                            onClick={() => handleMinus(post)}
                            >
                            <FontAwesomeIcon icon={["fas", "minus"]} fixedWidth />
                            </button>
                            <input
                            id="Amount"
                            min={0}
                            value={post.menuAmount}
                            type="number"
                            className="form-control form-control-sm text-center "
                            disabled
                            />
                            <button
                            className="btn btn-primary rounded-circle px-2"
                            onClick={() => handlePlus(post)}
                            >
                            <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth />
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">RP.{post.menuAllPrice}</h5>
                        </div>
                        <div className="col-md-3 col-lg-3 d-flex justify-content-between col-xl-3 text-center">
                            <button
                            className="btn btn-danger rounded-pill"
                            onClick={() => handleDelete(post.id)}
                            >
                            <FontAwesomeIcon icon={["fas", "trash"]} fixedWidth />
                            <span>Delete</span>
                            </button>
                            {handleMenu(post.menu_ID).menuAvailability ? (
                            <input
                                type="checkbox"
                                onClick={() => handleCheck(post)}
                                checked={post.Check}
                                className="ms-3 form-check-input align-middle"
                            />
                            ) : (
                            <span class="badge bg-secondary align-self-center ms-3">
                                <FontAwesomeIcon
                                icon={["fas", "xmark"]}
                                fixedWidth
                                />
                                kosong
                            </span>
                            )}
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                <div className="card">
                    <div className="card-body">
                    <button
                        type="button"
                        onClick={() => handleCheckout()}
                        className="btn btn-warning btn-block btn-lg"
                    >
                        <FontAwesomeIcon
                        icon={["fas", "cart-shopping"]}
                        fixedWidth
                        />
                        CheckOut
                    </button>
                    <div id="modalcheckout"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
