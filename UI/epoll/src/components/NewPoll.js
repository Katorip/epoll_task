import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { PollNameH3, NewPollDiv, FormLabel } from '../styles/allPollsStyles';

const NewPoll = () => {
  const pollsURL = 'https://localhost:7045/polls';
  const [optionCount, setOptionCount] = useState(0);
  const options = [];
  const optionValues = [];

  const [poll, setPoll] = useState({
    id: '0',
    title: '',
    option: [
      {
        id: '0',
        title: '',
        votes: '0',
      },
    ],
  });

  // POST: polls/add
  const addPoll = (e) => {
    e.preventDefault();
    axios
      .post(pollsURL + '/add', poll)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    settingPoll();
    addPoll(e);
  };

  const settingPoll = () => {
    setPoll({
      ...poll,
      option: optionValues,
    });
  };

  const addNewOption = () => {
    for (let i = 0; i < optionCount; i++) {
      const value = {
        id: '0',
        title: '',
        votes: '0',
      };

      optionValues.push(value);

      options.push(
        <div>
          <FormLabel>
            {'Option ' + (i + 1)}
            <input type="text" id={i} name={i} onChange={(e) => (optionValues[i].title = e.target.value)} />
          </FormLabel>
        </div>
      );
    }
  };

  return (
    <>
      <Header></Header>
      <PollNameH3>Create New Poll</PollNameH3>
      <NewPollDiv>Problem: Press submit twice</NewPollDiv>
      <NewPollDiv>
        <div>
          <FormLabel>How many options?</FormLabel>
          <input
            type="number"
            required
            id="count"
            name="count"
            min="1"
            onChange={(e) => setOptionCount(e.target.value)}
          ></input>
        </div>
        <button onClick={addNewOption()}>Add options</button>

        <form onSubmit={onSubmit}>
          <div>
            <FormLabel>Write poll question</FormLabel>
            <input
              type="text"
              autoFocus
              required
              onInput={(e) =>
                setPoll({
                  ...poll,
                  title: e.currentTarget.value,
                })
              }
            ></input>
          </div>
          <div>{options}</div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </NewPollDiv>
    </>
  );
};

export default NewPoll;
