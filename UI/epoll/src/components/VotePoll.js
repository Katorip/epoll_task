import React, { useState } from 'react';
import axios from 'axios';
import { InfoAreaDiv, VoteButton, VoteLabel } from '../styles/allPollsStyles';

const VotePoll = ({ poll, parentCallback }) => {
  const pollsURL = 'https://localhost:7045/polls';
  const [selectedOption, setSelectedOption] = useState(0);

  // Pass every needed parameters to function that calls backend
  const onSubmit = (e) => {
    e.preventDefault();
    voteForPoll(e, poll.id, selectedOption);
  };

  // Change selected option to what user has selected
  const onValueChange = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
  };

  // POST users vote to backend
  const voteForPoll = (e, id, option) => {
    e.preventDefault();
    axios
      .post(pollsURL + '/' + id + '/vote/' + option)
      .then((result) => {
        console.log(result);
        parentCallback(false, selectedOption);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Create options to UI
  const listOptions =
    poll &&
    poll.option &&
    poll.option.map((option, index) => {
      return (
        <InfoAreaDiv>
          <VoteLabel>
            <input type="radio" value={index} name="options" checked={option.title} onChange={onValueChange} />
            {option.title}
          </VoteLabel>
        </InfoAreaDiv>
      );
    }, this);

  return (
    <InfoAreaDiv>
      <form onSubmit={onSubmit}>
        {listOptions}
        <VoteButton className="submitButton" type="submit">
          Submit
        </VoteButton>
      </form>
    </InfoAreaDiv>
  );
};

export default VotePoll;
