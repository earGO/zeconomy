import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fileDataSelector, actions} from '../redux/duck';
import {debounce} from 'throttle-debounce';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  margin: 8px;
`;

function Search() {
  const fileData = useSelector(fileDataSelector);
  const dispatch = useDispatch();

  const debounceSearch = debounce(200, query =>
    dispatch(actions.searchName(query))
  );

  const handleInputChange = e => {
    debounceSearch(e.target.value);
  };

  if (fileData !== null) {
    return (
      <SearchContainer>
        <input onChange={handleInputChange} />
      </SearchContainer>
    );
  } else return null;
}

export default Search;
