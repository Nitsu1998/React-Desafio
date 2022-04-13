import { createContext, useEffect, useState } from "react";
export const contextCart = createContext()
const { Provider } = contextCart

export default function CartContextProvider( {children} ) {

    const localDataProducts = JSON.parse(localStorage.getItem('productsCart'))
    const localDataAmount = JSON.parse(localStorage.getItem('productsAmount'))
    const localDataTotal = JSON.parse(localStorage.getItem('total'))
    const [productsCart, setProductsCart] = useState(localDataProducts === null ? [] : localDataProducts)
    const [productsAmount, setProductsAmount] = useState(localDataAmount === null ? 0 : localDataAmount)
    const [total, setTotal] = useState (localDataTotal === null ? 0 : localDataTotal)
    const [checkout, setCheckout] = useState(false)

    useEffect ( () => {
        localStorage.setItem('productsCart', JSON.stringify(productsCart))
        localStorage.setItem('productsAmount', JSON.stringify(productsAmount))
        localStorage.setItem('total', JSON.stringify(total))
    }, [productsCart, productsAmount, total])

    const addProduct = (product, amount) => {
        const updatedCart = [...productsCart];
        const productInCart = updatedCart.find(p => p.id === product.id);

        if ( !productInCart ) {
            updatedCart.push( {...product, quantity: amount} );
        } else {
            productInCart.quantity+=amount;
        }
        setProductsCart(updatedCart);
        setProductsAmount(productsAmount + amount)
        setTotal(total + product.price*amount)
    }

    const removeProduct = (id) => { 
        const product = productsCart.find(p => p.id === id)
        if(product.quantity === 1){
            setProductsCart(productsCart.filter(productsCart => productsCart.id !== id))
        }else{
            product.quantity-=1;
        }
        setProductsAmount(productsAmount - 1)
        setTotal(total - product.price)
    }

    const clearCart = () => {
        setProductsCart([])
        setProductsAmount(0)
        setTotal(0)
        setCheckout(false)
    }

    const goCheckout = () => {
        setCheckout(true)
    }

    const cartContext = {
        productsCart,
        productsAmount,
        total,
        checkout,
        removeProduct,
        addProduct,
        clearCart,
        goCheckout,
    }
    
    return (
            <Provider value={cartContext}>
                {children}
            </Provider>
    )
}