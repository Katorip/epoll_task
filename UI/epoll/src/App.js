import './App.css';
import AllPolls from './components/AllPolls';
import NewPoll from './components/NewPoll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<AllPolls />}></Route>
        <Route exact={true} path="/newpoll" element={<NewPoll />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
