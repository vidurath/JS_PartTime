import React from 'react';
import Car from './Car';
import SearchCar from './SearchCar';

const listCars = [
    {
        id: 1,
        brand: "honda",
        name: "honda civic",
        year: "2008-01-01",
        origin: "Japan"
    },
    {
        id: 2,
        brand: "toyota",
        name: "toyota hilux",
        year: "2010-01-01",
        origin: "japan"
    },
    {
        id: 3,
        brand: "Chevrolet",
        name: "Chevrolet Vega 2300",
        year: "1971-01-01",
        origin: "USA"
    },
    {
        id: 4,
        brand: "Peugeot",
        name: "Peugeot 504 (sw)",
        year: "1972-01-01",
        origin: "Europe"
    },
    {
        id: 5,
        brand: "kia",
        name: "kia ev6",
        year: "2022-01-01",
        origin: "south korea"
    },
    {
        id: 6,
        brand: "kia",
        name: "kia sportage",
        year: "2022-01-01",
        origin: "south korea"
    },
]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: "",
            searchResult: [],
            carList: []
        }
    }

    handleChange = event => {
        const searchedCars = listCars.filter((car) =>
            car.brand.includes(event.target.value)
        )

        this.setState(
            {
                searchString: event.target.value,
                searchResult: searchedCars
            }
        )
    }

    render() {
        return (
            <div className="" >
                <SearchCar searchCar={this.state.searchString} handleChange={this.handleChange} />
                <Car chosenCars={this.state.searchResult} />
            </div>
        )
    }
}

export default App;