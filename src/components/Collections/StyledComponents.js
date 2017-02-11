import styled, { css } from 'styled-components';

const hoverStyle = css`
  background-color: gray;
  color: gray;
`;

export const StyledCollection = styled.div`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;

  ${props => props.isDragging && hoverStyle}

  .panel-default {
    background-color: red;
  }

  .panel-heading li {
    width: 48%;
    text-align: center;
    cursor: pointer;
    padding-bottom: 5px;
  }

  .panel-heading li.active {
    border-bottom: 3px solid #c8c4c4;
    font-weight: bold;
  }
`;

export const StyledRequest = styled.div`
  ul, li {
    ${props => props.isDragging && hoverStyle}
  }

  .list-group-item {
    display: flex;
    padding: 0;
  }
`;

export const AsideButtons = styled.aside`
  max-width: 36px;
  flex: 1;

  button {
    height: 50%;
  }

  button:first-child {
    border-bottom: 1px solid #ddd;
  }
`;

export const MainContent = styled.div`
  padding: 10px;
  word-break: break-all;
  border-left: 1px solid #ddd;
`;
