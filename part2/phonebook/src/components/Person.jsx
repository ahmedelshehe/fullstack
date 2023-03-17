const Person=({person,handleDelete})=>{
    const handleDeletePerson =()=>{
        if(window.confirm(`Delete ${person.name}?`)){
            handleDelete(person.id)
        }
    }
    return (
        <p>{person.name} : {person.number} <button onClick={handleDeletePerson} key={person.id}>delete</button> </p>
    )
}
export default Person;