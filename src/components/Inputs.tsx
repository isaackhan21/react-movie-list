import React from "react";

interface IProps {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<IProps> = ({ handleSort, handleSearch }) => {
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
