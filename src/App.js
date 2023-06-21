import Nav from "./components/nav";

import './App.css'

import userIcon from './assets/icons/user.svg';

function App() {
  return (
  <div className="app">
    <div className="topbar">
      <div className="logo">
        <h1>wurk.</h1>
      </div>
      <Nav />
      <div className="account">
        <img src={userIcon} alt="" />
      </div>
    </div>
    <main>
      <h1 className={"main-text"}>Get your wurk dun by <br/> your choice</h1>
    </main>
  </div>
  );
}

export default App;
