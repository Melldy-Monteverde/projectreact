import { useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = { ...prod, quantity: productToAdd.quantity }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const addQuantity = (id) => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                // const productoActualizado = { ...product, quantity: product.quantity + 1 }
                const productoActualizado = { ...product, quantity: product.quantity  < product.stock ? product.quantity + 1 :  product.quantity = product.stock }

                return productoActualizado
            } else {
                return product
            }
        }
        )
        setCart(newCart)
    }
    const lessQuantity = (id) => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                // const productoActualizado = { ...product, quantity: product.quantity -= 1 }
                const productoActualizado = { ...product, quantity: product.quantity  > 1 ? product.quantity - 1: product.quantity = 1 }
                return productoActualizado
            } else {
                return product
            }
        }
        )
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addQuantity, lessQuantity, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext