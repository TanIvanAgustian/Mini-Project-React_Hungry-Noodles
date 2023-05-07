import { DeleteCartByUserId, GetCheckoutItem } from "../../../fetchData/graphQLCart"
import { getAuthCookie } from "../../../utils/cookies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../../assets/Logo.png"
import Province from "../../../json/province.json"
import City from "../../../json/city.json"
import { useState } from "react"
import * as Yup from "yup"
import { useFormik } from "formik"
import GETGraphQLUsers from "../../../fetchData/GraphQLUsers"
import { InsertCheckout } from "../../../fetchData/graphQLCheckout"
import { useNavigate } from "react-router-dom"


export default function Checkout(){
    const {data} = GetCheckoutItem()
    const token = getAuthCookie()
    const [city,setCity] = useState([])
    const [postalCode,setpostalCode] = useState([])
    const [address,setAddress] = useState({ongkir: 0})
    const [finalPrice, setFinalPrice] = useState(0)
    const myCheckout = data?.Cart.filter((element) => element.user_ID == token)
    const {users} = GETGraphQLUsers() 
    const {addData} = InsertCheckout()
    const navigate = useNavigate()
    const {DeleteByUserId} = DeleteCartByUserId()

    const priceMakanan = () => {
      let price = 0;
      for ( let i = 0 ; myCheckout?.length > i ; i++ ){
        price = price + myCheckout[i].menuAllPrice
      }
      return price
    }

    const handleProvinsi = (e) => {
      const getProvinceName = e.target.value
      const cityList = City.filter((element) => element.province == getProvinceName)
      setCity(cityList);
    }

    const handleKota = (e) => {
      const getCityName = e.target.value
      const postalCode = City.filter((element) => element.city_name == getCityName)
      setpostalCode(postalCode)
    }

    const handlePostal = (e) => {
      const getPostal = e.target.value
      const address = City.find((element) => element.postal_code == getPostal)
      setAddress(address)

      var Price = priceMakanan()
      var FinalPrice = Price + address.ongkir;
      setFinalPrice(FinalPrice)
    }

    const formik = useFormik({
      initialValues: {
        phoneNumber:"",
        Address:"",
      },
      validationSchema: Yup.object({
          phoneNumber: Yup.string().required("Phone Number Empty"),
          Address: Yup.string().required("Phone Number Empty"),
      }),
      onSubmit: (e) => {
        const user = users.Users.find((element) => element.Id == token)
        console.log(myCheckout)
        let makanan = []
        let jumlah = []
        let hargaSatuan = []
        for( let i = 0 ; myCheckout.length > i ; i++ ){
          makanan.push(myCheckout[i].menuName)
          jumlah.push(myCheckout[i].menuAmount)
          hargaSatuan.push(myCheckout[i].menuAllPrice)
        }
        addData({
          variables:{
            object:{
              userName : user.Username,
              email : user.Email,
              order : "{"+makanan+"}",
              orderAmount : "{"+jumlah+"}",
              orderPrice : "{"+hargaSatuan+"}",
              province : address.province,
              city : address.city_name,
              postalCode: address.postal_code,
              address : formik.values.Address,
              phoneNumber : formik.values.Address,
              payment : "coba tok",
              totalPayment : finalPrice,
              user_ID: token
            }
          }
        })
        DeleteByUserId({
          variables:{
            id:{
              _eq : token
            }
          }
        })
        navigate("/Homepage/Menus")
      },
  });

    return <>
    <div className="container bg-dark text-light mb-3 mt-3">
  <div className="py-5 text-center">
    <img
      className="d-block mx-auto mb-4 rounded-circle"
      src={Logo}
      alt=""
      width={72}
      height={72}
    />
    <h2><FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/> Checkout form</h2>
  </div>
  <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">{myCheckout?.length}</span>
      </h4>
      <ul className="list-group mb-3 sticky-top">
        {myCheckout?.map((post) => (
            <li className="list-group-item d-flex justify-content-between lh-condensed" key={post.id}>
                <div>
                <h6 className="my-0">{post.menuName}</h6>
                <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">Rp. {post.menuAllPrice}</span>
            </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Ongkir (IDR)</span>
          <strong>RP.{address.ongkir}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (IDR)</span>
          <strong>RP.{finalPrice}</strong>
        </li>
      </ul>
    </div>
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
            onChange={formik.handleChange}
            value={formik.phoneNumber}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="form-text text-danger">
                {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="Address"
            placeholder="Enter Yout Address"
            onChange={formik.handleChange}
            value={formik.Address}
          />
          {formik.errors.Address && formik.touched.Address && (
            <div className="form-text text-danger">
                {formik.errors.Address}
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Province</label>
            <select
              className="custom-select d-block w-100"
              id="province"
              onChange={(e) => handleProvinsi(e)}
              required
            >
              <option value="">Choose...</option>
              {Province?.map((Provinsi, index) => (
                <option value={Provinsi.province} key={index}>{Provinsi.province}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">City</label>
            <select
              className="custom-select d-block w-100"
              id="state"
              onChange={(e) => handleKota(e)}
              required
            >
              <option value="">Choose...</option>
              {city?.map((kota, index) => (
                <option value={kota.city_name} key={index}>{kota.city_name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="state">Postal Code</label>
            <select
              className="custom-select d-block w-100"
              id="state"
              onChange={(e) => handlePostal(e)}
              required
            >
              <option value="">Choose...</option>
              {postalCode?.map((kode, index) => (
                <option value={kode.postal_code} key={index}>{kode.postal_code}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary btn-lg btn-block p-3 mb-3" type="submit">
            <FontAwesomeIcon icon={["fas","cart-shopping"]} fixedWidth/> Checkout
        </button>
      </form>
    </div>
  </div>
</div>

    </>
}