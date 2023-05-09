import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 30%;
  height: 100%;
  background-color: blue;
`;

export const PollInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 70%;
  height: 100%;
  background-color: white;
`;

export const PollNameH3 = styled.h3`
  padding: 20px 0 20px 20px;
  color: black;
`;

export const InfoAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
`;

export const InfoUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 20px;
`;

export const VoteButton = styled.button`
  background-color: blueviolet;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  width: 100px;
  margin-left: 20px;
  margin-top: 10px;
  :hover {
    background-color: darkblue;
  }
`;

export const HeadLineDiv = styled.div`
  padding: 20px 0 20px 20px;
  color: white;
`;

export const PollList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 20px;
`;

export const PollButton = styled.button`
  background-color: blueviolet;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-bottom: 8px;
  text-align: center;
  text-decoration: none;
  :hover {
    background-color: darkblue;
  }
`;

export const VoteLabel = styled.label`
  margin-left: 20px;
`;

export const NewPollDiv = styled.div`
  margin-left: 20px;
`;

export const FormLabel = styled.label`
  margin-right: 20px;
`;
