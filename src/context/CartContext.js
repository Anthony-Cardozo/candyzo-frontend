import { createContext, useState, useEffect } from 'react';
import products from '../data/products'

export const CartContext = createContext({
    items: [],
    getProductQuantity: ()=> {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState(() => {
        const storedCart = localStorage.getItem('cartProducts');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    // [{ id: 1, quantity:2 }, ]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if(quantity===undefined)
            return 0;
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity===0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id===id? {...product, quantity: product.quantity+1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity===1){
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id===id? {...product, quantity: product.quantity-1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                }
            )
        )
    }

    function getTotalCost() {
        let total = 0;
        cartProducts.map((cartItem) => {
            //const productData = getProductData(cartItem.id);
            //total+=productData.price*cartItem.quantity;
           total+=products[cartItem.id-1].price*cartItem.quantity;
        })
        return total;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,     
        getTotalCost    
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;