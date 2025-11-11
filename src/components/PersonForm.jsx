const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <form onSubmit={addPerson}>
    <div>
      nombre: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      número: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">añadir</button>
    </div>
  </form>
)

export default PersonForm