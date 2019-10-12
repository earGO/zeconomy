import React from 'react';
import {useSelector} from 'react-redux';
import {fileDataSelector} from '../redux/duck';
import OneLevel from './OneLevel';
import styled from 'styled-components';

const DirectoryStructureContainer = styled.div`
  display: flex;
  width: 50%;
  margin: auto auto;
`;

function DirectoryStructure() {
  const fileData = useSelector(fileDataSelector);

  if (fileData !== undefined) {
    return (
      <DirectoryStructureContainer>
        <OneLevel oneLevelOfData={fileData} />
      </DirectoryStructureContainer>
    );
  } else {
    return (
      <DirectoryStructureContainer>
        <p>Please select a file to parse</p>
      </DirectoryStructureContainer>
    );
  }
}

export default DirectoryStructure;
