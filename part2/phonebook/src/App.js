import { useState ,useEffect } from 'react'
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Notification from './components/Notification';
import contactsService from './services/contacts';
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName,setNewName]=useState('');
  const[newNumber,setNewNumber]=useState('')
  const [searchTerm, setSearchTerm]=useState('')
  const [searchResults,setSearchResults]=useState([])
  const [notificationMessage,setNotificationMessage]=useState(null);
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
          setNotificationMessage({
            message: `${person.name} is updated with ${newNumber}`,
            type:'success'
          })
          setTimeout(()=>{
            setNotificationMessage(null)
          },5000)
        }
      }   
    }else{
      contactsService.create({name:newName,number:newNumber}).then((newContact)=>{
        setPersons(persons.concat(newContact));
      })
      setNotificationMessage({
        message: `${newName} is added to your phonebook`,
        type:'success'
      })
      setTimeout(()=>{
        setNotificationMessage(null)
      },5000)
      setNewName('');setNewNumber('');
    }
  }
  const handleDelete=(id)=>{
    const personDeleted=persons.find(person=>person.id ===id)
    contactsService.remove(id).then((response)=>{
    setNotificationMessage({
      message: `${personDeleted.name} is deleted from your phonebook`,
      type:'success'
    })
    setTimeout(()=>{
      setNotificationMessage(null)
    },5000)
    setPersons(persons.filter(p => p.id !== id))
    }).catch(err => {
      setNotificationMessage({
        message: `${personDeleted.name} is already removed`,
        type:'error'
      })
      setPersons(persons.filter(p => p.id !== id))
      setTimeout(()=>{
        setNotificationMessage(null)
      },5000)
    });
  }
  useEffect(()=>{
   contactsService.getAll().then(initialPersons =>setPersons(initialPersons))
  },[])
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationMessage={notificationMessage} />
      <Filter  searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <AddForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} handleAddPerson={handleAddPerson}/>
      <h2>Numbers</h2>  
      <Persons searchTerm={searchTerm} searchResults={searchResults} persons={persons} handleDelete={handleDelete}/>
      </div>
  )
}

export default App