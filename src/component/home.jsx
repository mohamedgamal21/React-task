import Product from "./product.jsx";

import productImg from "../image/denim-pioneer.jpg"

export default function Home() {


    return (
        <>
            <Product image={productImg} description='Jacket' price={30} />
        </>
    )
}