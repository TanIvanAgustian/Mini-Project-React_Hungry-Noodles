import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { UpdateMenusById } from "../../../fetchData/graphQLMenus";
import CloudinaryUpload from "../../Js/cloudinaryUpload";


export default function AdminEditMenuForm(props) {
    
    const {UpdateMenu} = UpdateMenusById()
    
    const data = props.src;
    console.log(data)

    const formik = useFormik({
        initialValues: {
        menuName: data.menuName,
        menuDescription:data.menuDescription,
        menuImage: data.menuImage,
        menuCategory: data.menuCategory,
        menuPrice: data.menuPrice,
        menuStock: data.menuStock,
        },
        validationSchema: Yup.object({
            menuName: Yup.string().required("Product Name Empty"),
            menuDescription: Yup.string().required("Product Description Empty"),
            menuCategory: Yup.string().required("Product Category Empty"),
            menuPrice: Yup.string().required("Product Price Empty"),
            menuStock: Yup.string().required("Product Stock Empty"),
        }),
        onSubmit: (e) => {
            UpdateMenu({
                variables: {
                    id : data.id,
                    object: {
                        menuName : formik.values.menuName,
                        menuDescription : formik.values.menuDescription,
                        menuImage : document.getElementById("uploadedimage").getAttribute("src"),
                        menuCategory : formik.values.menuCategory,
                        menuPrice : formik.values.menuPrice,
                        menuStock : formik.values.menuStock,
                    }
                }
            })
            props.onHide()
        },
    });

    return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Form Input Produk
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <div className="text-center mb-3">
                    <img id="uploadedimage" className="rounded mb-3" width={"200px"} src={data.menuImage} alt="image Not Found" /> <br />
                    <CloudinaryUpload/>
                </div>
            

            <form onSubmit={formik.handleSubmit}>
                <div className="form-group row mt-2">
                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                    Nama Produk
                </label>
                <div className="col-sm-8">
                    <input
                    type="text"
                    className="form-control"
                    id="menuName"
                    placeholder="Masukkan Nama produk"
                    value={formik.values.menuName}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.menuName && formik.touched.menuName && (
                    <div className="form-text text-danger">
                        {formik.errors.menuName}
                    </div>
                    )}
                </div>
                </div>

                <div className="form-group row mt-2">
                <label htmlFor="inputDescription3" className="col-sm-4 col-form-label">
                    Deskripsi Produk
                </label>
                <div className="col-sm-8">
                    <textarea
                    className="form-control"
                    id="menuDescription"
                    placeholder="Masukkan Deskripsi Produk"
                    value={formik.values.menuDescription}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.menuDescription &&
                    formik.touched.menuDescription && (
                        <div className="form-text text-danger">
                        {formik.errors.menuDescription}
                        </div>
                    )}
                </div>
                </div>

                <div className="form-group row mt-2">
                <label
                    htmlFor="inputPassword3"
                    className="col-sm-4 col-form-label"
                >
                    Kategori Produk
                </label>
                <div className="col-sm-8">
                    <select
                    className="form-control"
                    name="menuCategory"
                    id="menuCategory"
                    onChange={formik.handleChange}
                    >
                    <option value="">--Pilih Salah Satu--</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                    <option value="Snack">Snack</option>
                    </select>
                    {formik.errors.menuCategory && formik.touched.menuCategory && (
                    <div className="form-text text-danger">
                        {formik.errors.menuCategory}
                    </div>
                    )}
                </div>
                </div>

                <div className="form-group row mt-2">
                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                    Harga Produk
                </label>
                <div className="col-sm-8">
                    <input 
                    type="number"
                    className="form-control"
                    id="menuPrice"
                    placeholder="Masukkan Harga Produk"
                    value={formik.values.menuPrice}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.menuPrice && formik.touched.menuPrice && (
                    <div className="form-text text-danger">
                        {formik.errors.menuPrice}
                    </div>
                    )}
                </div>
                </div>

                <div className="form-group row mt-2 mb-3">
                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
                    Stok Produk
                </label>
                <div className="col-sm-8">
                    <input 
                    type="number"
                    className="form-control"
                    id="menuStock"
                    placeholder="Masukkan Stok Produk"
                    value={formik.values.menuStock}
                    onChange={formik.handleChange}
                    />
                    {formik.errors.menuStock && formik.touched.menuStock && (
                    <div className="form-text text-danger">
                        {formik.errors.menuStock}
                    </div>
                    )}
                </div>
                </div>

                <Modal.Footer>
                <div className="form-group row">
                    <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">
                        Edit
                    </button>
                    </div>
                </div>
                </Modal.Footer>
            </form>
            </Modal.Body>
        </Modal>
        </>
    );
}
