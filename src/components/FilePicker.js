import React from 'react';
import {useDispatch} from 'react-redux';
import jsonParser from '../utils/jsonParser';
import ErrorBoundary from './ErrorBoundary';
import {actions} from '../redux/duck';

function FilePicker() {
  const dispatch = useDispatch();

  let fileReader;

  /** in this component i'll put the parsed file data in redux store.  */
  const handleFile = e => {
    const content = fileReader.result;
    dispatch(actions.parseFile(jsonParser(content)[0]));
  };

  const handleChangeFile = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFile;
    fileReader.readAsText(file);
  };
  return (
    <ErrorBoundary>
      <div id={'fileInput'}>
        <input
          type="file"
          accept=".json"
          onChange={e => handleChangeFile(e.target.files[0])}
        />
      </div>
    </ErrorBoundary>
  );
}

export default FilePicker;
