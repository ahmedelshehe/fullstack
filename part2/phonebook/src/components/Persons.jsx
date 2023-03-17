import Person from "./Person";
const Persons =({searchTerm,searchResults,persons,handleDelete})=>{
    return (
          searchTerm ===''?persons.map((person) => <Person person={person} key={person.id} handleDelete={handleDelete}/>) :
                      searchResults ===[] ?<p>No Result Found</p> : 
                      searchResults.map((person) => <Person person={person} key={person.id} handleDelete={handleDelete}/>)
    )
}
export default Persons;