export const ADD_TO_CART ="ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";


export const addToCart = (product) => {
    return {type :ADD_TO_CART,payload:product} //payload = fonksiyonun taşıdığı veri ''
}

export const removeFromCart = (product)=> {
    return {type:REMOVE_FROM_CART,payload: product}
}

export const clearCart=() => {
    return {type:CLEAR_CART}
} 