import React from 'react'
//className='pa3 ba b--green bg-lightest-blue' 
//className='pa2'
const SearchBox=({searchChange})=> {
    return (
        <div className='pa3 ba b--green bg-lightest-blue' >
            <input 
            className='pa2' 
            type="search" 
            placeholder="search robot" 
            onChange={searchChange}/>

        </div>
    );
}
export default SearchBox;