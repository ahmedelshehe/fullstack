const Filter=({searchTerm,handleSearchChange})=>{
    return (
        <>
            filter shown with <input value={searchTerm} onChange={handleSearchChange}/><br/>
        </>
    );
}
export default Filter;