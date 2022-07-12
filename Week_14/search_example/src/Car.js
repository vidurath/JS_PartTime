import './Car.css';

const Car = (props) => {
    let { chosenCars } = props;
    return (
        <div>
            {
                chosenCars.map(item => (
                    <ul key={item.id} className="list-display">
                        <li>
                            <h3>{item.brand}</h3>
                            <h4>{item.name}</h4>
                            <p>{item.year}</p>
                            <p>{item.origin}</p>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Car;