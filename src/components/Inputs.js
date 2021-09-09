const Inputs = ({ handleSort, handleSearch }) => {
  return (
    <div className="inputs">
      <input
        className="search"
        type="text"
        placeholder="Search movie..."
        onChange={handleSearch}
      />
      <select className="select" defaultValue="Sort" onChange={handleSort}>
        <option disabled value="Sort">
          Sort by Average Rating
        </option>
        <option value="Highest Rating">Highest to Lowest Rating</option>
        <option value="Lowest Rating">Lowest to Highest Rating</option>
      </select>
    </div>
  );
};

export default Inputs;
