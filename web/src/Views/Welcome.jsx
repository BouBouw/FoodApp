import { useEffect } from "react"
import { Headers } from "../Components/Headers"
import Products from "../Functions/Products"

export const Welcome = () => {
    useEffect(() => {
        Products.GetListProducts('chocolat');
    })

    return(
        <>
            <Headers/>
        </>
    )
}