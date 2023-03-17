const AddForm=({newName,newNumber,handleNameChange,handlePhoneChange,handleAddPerson})=>{
    return (
    <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          phone : <input value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
    </form>
      )
}
export default AddForm;