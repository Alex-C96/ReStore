import { Button } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}


export default function Catalog({products, addProduct}: Props){
    return (
        <>
            <ProductList products={products}/>
            <Button variant='outlined' onClick={addProduct}>Add product</Button>
        </>
    )
}