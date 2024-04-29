import { useState } from "react"
import { post } from "../API"

const AddForm = ({ product, setproduct, getProducts }) => {

    const [nameProduct, setnameProduct] = useState("")
    const [priceProduct, setpriceProduct] = useState("")
    const [nameErr, setnameErr] = useState("")
    const [priceErr, setpriceErr] = useState("")


    async function checkValidation(e) {
        e.preventDefault()
        if (nameProduct.trim().length == "" || priceProduct.trim().length == "") {
            alert("Please enter a product name and a product")
        } else {
            setproduct([...product, {
                name: nameProduct,
                price: priceProduct
            }])
            await post({
                name: nameProduct,
                price: priceProduct
            })
            getProducts()
            setnameProduct("");
            setpriceProduct("");
        }
    }
    return (
        <>
            <div className="container">
                <form action="" className="d-flex flex-column gap-3" onSubmit={checkValidation}>
                    <label htmlFor="">Product Name</label>
                    <input value={nameProduct} type="text" placeholder='Product Name' onChange={(e) => {
                        setnameProduct(e.target.value)
                        
                    }} />
                    <label htmlFor="">Product Price</label>
                    <input value={priceProduct} type="text" placeholder='Product Price' onChange={(e) => {
                        setpriceProduct(e.target.value)
                    }} />
                    <button>SUBMT FORM</button>
                </form>
            </div>

        </>
    )
}

export default AddForm
