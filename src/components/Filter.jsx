const Filter = ({ filter, handleFilterChange }) => (
  <div>
    filtrar: <input value={filter} onChange={handleFilterChange} />
  </div>
)

export default Filter