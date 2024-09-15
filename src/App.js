import './App.css';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {
  return (
    <>
      <Profile/>
      <div className='main-wrapper'>
        <Main/>
        <Header/>
        <Portfolio/>
      </div>
    </>
  );
}

export default App;
