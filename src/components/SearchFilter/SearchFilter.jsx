

export const SearchFilter = ({ filter, filteredArr }) => (
  <label>
    <input
      type="text"
      placeholder=" Find contacts by name"
      value={filter}
      onChange={filteredArr}
    ></input>
  </label>
);
