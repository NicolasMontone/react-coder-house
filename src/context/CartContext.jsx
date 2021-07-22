import { createContext, useState, useEffect } from 'react';
import { orderFirebase } from "../utils/helpers"


export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [listProducts, setListProducts] = useState([]);

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

    //DATABASE

    useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection('productos')
            const RESPONSE = await COLLECTION.get();
            setListProducts(RESPONSE.docs.map(element => element.data()))
        }
        getData()
        console.log(listProducts)
    }, []);

    const getProductoById = (id) => {
        return listProducts.find(element => element.id === id)
    }
    const getProductosByCategory = (categoty) => {
        return listProducts.filter(element => element.categoria === category)
    }
    const getCategorias = () => {
        const categorias = listProducts.map(element => element.categoria)
        const categoryAux = []
        categorias.forEach(element => {
            if (!categoryAux.includes(element)) {
                categoryAux.push(element)
            }
        });

        return categoryAux;
    }
    const createOrder = async (data) => {
        const db = getFirestore();
        // const order = {
        //     buyer: data,
        //     item: shoppingList,
        //     total: getTotal()
        // }
        const order = { buyer: { name, phone, email }, item: carrito, total: totalPrice };
        const response = await orderFirebase(order)
        console.log(response)
    }
    return (
        <CartContext.Provider value={{ addItem, carrito, setCarrito, eliminarTodo, removeItem, totalPrice, listProducts, getProductoById, getProductosByCategory, getCategorias, createOrder }}>
            {children}
        </CartContext.Provider >
    )
}

