import React, { useState } from 'react';


function Search(props) {
 
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredData = props.data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
     <div className="search__user">
      <input type="search" placeholder="&#x1F50E;&#xFE0E; Search"
      value={searchTerm} onChange={handleInputChange} />
       <div>
       {filteredData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
       </div>
   
     </div>

  )
}

export default Search
