import React from 'react';
import { Search } from 'monday-ui-react-core/next';
import type { SearchBarProps } from '../../typing/searchBarType';
import './SearchBar.css';

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <Search
            autoFocus={true}
            className='search-bar'
            size='small'
            placeholder='Search for countries, regions or capitals...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e)}
        />
    );
};

export default SearchBar;
