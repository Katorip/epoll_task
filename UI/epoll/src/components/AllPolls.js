import React, { useState, useEffect } from 'react';
import Header from './Header';
import VotePoll from './VotePoll';
import axios from 'axios';
import {
  MainDiv,
  ContentDiv,
  SidebarDiv,
  PollInfoDiv,
  PollNameH3,
  InfoDiv,
  InfoAreaDiv,
  InfoUl,
  VoteButton,
  HeadLineDiv,
  PollList,
  PollButton,
} from '../styles/allPollsStyles';

const AllPolls = () => {
  const [vote, setVote] = useState(false);
  const pollsURL = 'https://localhost:7045/polls';
  const [polls, setPolls] = useState([]);
  const [poll, setPoll] = useState();
  const [pollName, setPollName] = useState('Choose poll');

  const getData = () => {
    axios
      .get(pollsURL)
      .then((result) => {
        setPolls(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getPollData = (id) => {
    axios
      .get(pollsURL + '/' + id)
      .then((result) => {
        setPoll(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showOptions = (id) => {
    setPollName(polls[id - 1].title);
    getPollData(id);
  };

  const callbackFunction = (isVoted, id, option) => {
    setVote(isVoted);
  };

  const listPolls = polls.map((polls, index) => {
    return (
      <li>
        <PollButton className="question-button" id={polls.id} onClick={() => showOptions(polls.id)}>
          {polls.title}
        </PollButton>
      </li>
    );
  }, this);

  const listOptions =
    poll &&
    poll.option &&
    poll.option.map((option) => {
      return (
        <li>
          <p>{option.title}</p>
        </li>
      );
    }, this);

  const listVotes =
    poll &&
    poll.option &&
    poll.option.map((option) => {
      return (
        <li>
          <p>Votes: {option.votes}</p>
        </li>
      );
    }, this);

  return (
    <MainDiv>
      <Header></Header>
      <ContentDiv>
        <SidebarDiv>
          <HeadLineDiv>All Polls</HeadLineDiv>
          <PollList>{listPolls}</PollList>
        </SidebarDiv>
        <PollInfoDiv>
          <PollNameH3>{pollName}</PollNameH3>
          {vote === false ? (
            <InfoAreaDiv>
              <InfoDiv>
                <InfoUl>{listOptions}</InfoUl>
                <InfoUl>{listVotes}</InfoUl>
                <div></div>
              </InfoDiv>
              <VoteButton onClick={() => setVote(true)}>Vote</VoteButton>
            </InfoAreaDiv>
          ) : (
            <div>
              <VotePoll poll={poll} parentCallback={callbackFunction}></VotePoll>
              <VoteButton onClick={() => setVote(false)}>Back</VoteButton>
            </div>
          )}
        </PollInfoDiv>
      </ContentDiv>
    </MainDiv>
  );
};

export default AllPolls;
