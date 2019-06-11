import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='pa3 b--gray'>
            <input 
                className='pa3 ba bg-lightest-gray o-80'
                type='search' 
                placeholder='search cat breed'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;