import './styles.css'
export const Card = (props) => {
    function saludar() {
        alert('hola')
    }
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <h2>{props.precio}</h2>
        </div>
    )
}