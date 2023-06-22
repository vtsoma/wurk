import Nav from "./components/nav";

import './App.css'

import userIcon from './assets/icons/user.svg';
import colorPath from './assets/images/color-path.svg';

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
      <article>
        <h1 className={"main-text"}>Get your wurk dun by <br/> your choice</h1>
        <p className={"desc-text"}>Our users can do anything</p>
        <p className="desc-text">From delivery to murder</p>
        <p className="desc-text">Sign up today!</p>
        <img src={colorPath} alt="Color path cool"/>
      </article>
    </main>
  </div>
  );
}

export default App;
