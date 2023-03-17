const Persons =({searchTerm,searchResults,persons})=>{
    return (
          searchTerm ===''?persons.map((person,i) => <p key={i}>{person.name} : {person.number}</p>) :
                      searchResults ===[] ?<p>No Result Found</p> : 
                      searchResults.map((person,i) => <p key={i}>{person.name} :{person.number}</p>)
    )
}
export default Persons;