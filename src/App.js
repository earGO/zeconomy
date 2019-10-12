import React from 'react';
import FilePicker from './components/FilePicker';
import DirectoryStructure from './components/DirectoryStructure';
import Search from './components/Search';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin: auto auto;
`;

function App() {
  return (
    <AppContainer>
      <FilePicker />
      <Search />
      <DirectoryStructure />
    </AppContainer>
  );
}

export default App;
