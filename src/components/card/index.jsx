import './style.css'

function Card(card) {
    return(
        <div className='card'>
        <strong>{card.name}</strong>
        <small>{card.time}</small>
        </div>
    )
}

export default Card