import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const isInCart = (id) => {
        return carrito.some(product => product.id === id)
    }

    const addItem = ({ product }, quantity) => {
        if (isInCart(product.id)) {
            const newCart = carrito.map(cartElement => {
                if (cartElement.id === product.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCarrito(newCart);
        } else {
            setCarrito(prev => [...prev, { ...product, quantity }]);
        }
        console.log(carrito)
        getTotalPrice()
    }

    const removeItem = (index) => {
        let newCart = carrito;
        newCart.splice(index, 1);
        console.log(newCart)
        setCarrito(newCart);
        console.log(carrito)
        getTotalPrice()
    }

    const eliminarTodo = () => {
        setCarrito([])
        getTotalPrice(0);
    };

    const getTotalPrice = () => {
        let total = carrito.reduce((accumulator, currentValue) => {
            return (currentValue.price * currentValue.quantity) + accumulator
        }, 0);
        setTotalPrice(total);
    }

    useEffect(() => {
        const localCart = localStorage.getItem('carrito');
        if (!localCart) localStorage.setItem('carrito', JSON.stringify([]));
        else setCarrito(JSON.parse(localCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ addItem, carrito, setCarrito, eliminarTodo, removeItem, totalPrice }}>
            {children}
        </CartContext.Provider >
    )
}

