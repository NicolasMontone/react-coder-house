// import './styles.css'
// export const Navbar = () => {
//     return (
//         <div className='position'>
//             <div className='nav'>
//                 <img src='.images/logo.png' alt='ojo con el seo' />
//                 <ul className='nav-ul'>
//                     <li className='nav-li'><a href='#'>Home</a></li>
//                     <li className='nav-li'><a href='#'>About</a></li>
//                     <li className='nav-li'><a href='#'>News</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
export const Navbar = () => {
    return (
        <div className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./images/logo.png" alt="hola" width="35" height="29" className="d-inline-block align-text-top" />
                        Compra libre
                </a>
                <ul className="navbar-nav" >
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Cuenta</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link " href="#">Carrito</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}