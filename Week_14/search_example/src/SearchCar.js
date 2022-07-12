import './SearchCar.css';

const SearchCar = (props) => {
    let { searchCar, handleChange } = props;

    return (
        <div className="search-bar">
            <label className='search-text'>Search: </label>
            <input
                id="search"
                type="text"
                value={searchCar}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchCar;