import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {Folder, Description} from '@material-ui/icons';
import ErrorBoundary from './ErrorBoundary';
import {searchQuerySelector} from '../redux/duck';

const LineContainer = styled.div`
  display: flex;
  flex-flow: nowrap row;
  width: 60%;
  justify-content: flex-start;
  align-items: baseline;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-flow: nowrap column;
`;

const ItemTitle = styled.div`
  position: relative;
  top: -5px;
  background-color: ${props => (props.highlight ? 'yellow' : 'none')};
`;

/** basically I'm just recursevly calling same function if I've discovered an array
 * with some contents in it */
function SimpleItem({lineOfData, SearchQuery}) {
  const {name, type, contents} = lineOfData;

  const regexConst = new RegExp(SearchQuery, 'ig');
  const Highlight =
    SearchQuery !== null &&
    SearchQuery !== '' &&
    type === 'file' &&
    name.search(regexConst) > -1;

  const Icon = () => (type === 'file' ? <Description /> : <Folder />);
  if (contents === undefined) {
    return (
      <LineContainer>
        {type !== undefined && <Icon />}
        <ItemTitle highlight={Highlight}>{name}</ItemTitle>
      </LineContainer>
    );
  } else {
    return (
      <LineContainer>
        {type !== undefined && <Icon />}
        <ItemTitle highlight={Highlight}>{name}</ItemTitle>
        <VerticalContainer>
          {contents.map((item, key) => {
            return (
              <>
                <div></div>
                <OneLevel oneLevelOfData={item} key={key} />
              </>
            );
          })}
        </VerticalContainer>
      </LineContainer>
    );
  }
}

function OneLevel({oneLevelOfData}) {
  const SearchQuery = useSelector(searchQuerySelector);
  if (oneLevelOfData !== null) {
    return (
      <ErrorBoundary>
        <SimpleItem lineOfData={oneLevelOfData} SearchQuery={SearchQuery} />
      </ErrorBoundary>
    );
  } else return null;
}

export default OneLevel;
