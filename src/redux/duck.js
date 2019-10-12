import {createSelector} from 'reselect';

export const namespace = 'zeconomy';

/** define action types */
const PARSED_FILE = `${namespace}/PARSED_FILE`;
const SEARCH_FILE_NAME = `${namespace}/SEARCH_FILE_NAME`;

export const types = {
  PARSED_FILE,
  SEARCH_FILE_NAME,
};

export const actions = {
  parseFile(content) {
    return {
      type: PARSED_FILE,
      payload: content,
    };
  },
  searchName(query) {
    return {
      type: SEARCH_FILE_NAME,
      payload: query,
    };
  },
};

const initialState = {
  fileData: null,
  searchQuery: null,
};

export const fileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARSED_FILE:
      return {...state, fileData: action.payload};
    case SEARCH_FILE_NAME:
      return {...state, searchQuery: action.payload};
    default:
      return state;
  }
};

const namespaceSelector = state => state;

export const fileDataSelector = createSelector(
  namespaceSelector,
  state => state.fileData
);
export const searchQuerySelector = createSelector(
  namespaceSelector,
  state => state.searchQuery
);
