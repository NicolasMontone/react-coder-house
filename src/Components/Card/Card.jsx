import './styles.css'
export const Card = () => {
    function saludar() {
        alert('hola')
    }
    return (
        <div className='card'>
            <h1>Card</h1>
            <img src='./images/logo.png' />
            <button onClick={saludar}></button>
        </div>
    )
}