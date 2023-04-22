import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = () => {
    const { id } = useParams();
    console.log(id);
    return ( <>  product page </>);
}
 
export default ProductPage;