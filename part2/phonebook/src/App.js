import { useState ,useEffect } from 'react'
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import contactsService from './services/contacts';
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName,setNewName]=useState('');
  const[newNumber,setNewNumber]=useState('')
  const [searchTerm, setSearchTerm]=useState('')
  const [searchResults,setSearchResults]=useState([])
  const handleNameChange=(event)=> setNewName(event.target.value)
  const handlePhoneChange=(event)=>setNewNumber(event.target.value)
  const handleSearchChange=(event)=>{
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if(event.target.value !== ''){
      setSearchResults(persons.filter(person => person.name.toLowerCase().search(event.target.value) !== -1))
    }else{
      setSearchResults([])
    }
  }
  const handleAddPerson=(event)=>{
    event.preventDefault()
    const names =persons.map(persons => persons.name);
    if(names.includes(newName)){
      const person=persons.find(person => person.name ===newName);
      if(person.number===newNumber){
        alert( `${newName} is already added to the phonebook with same number`)
      }else{
        if(window.confirm(`${person.name} is already added to the phonebook ,replace the old number with ${newNumber}`)){
          contactsService.update(person.id,{...person,number:newNumber})
          setNewName('');setNewNumber('');
        }
      }   
    }else{
      contactsService.create({name:newName,number:newNumber}).then((newContact)=>{
        setPersons(persons.concat(newContact));
      })
      setNewName('');setNewNumber('');
    }
  }
  const handleDelete=(id)=>{
    contactsService.remove(id);
  }
  useEffect(()=>{
   contactsService.getAll().then(initialPersons =>setPersons(initialPersons))
  },[persons])
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <AddForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} handleAddPerson={handleAddPerson}/>
      <h2>Numbers</h2>  
      <Persons searchTerm={searchTerm} searchResults={searchResults} persons={persons} handleDelete={handleDelete}/>
      </div>
  )
}

export default App