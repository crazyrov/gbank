import './card.css';

const Card = ({ title, details }) => {
    console.log(details)
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="class-body">
                {[...details.entries()].map(([key, value]) => (
                    <p className='cardBodyText'><b>{key}</b>: {value} </p>

                ))}
            </div>


        </div>
    );
}


export default Card