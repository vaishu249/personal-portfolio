import './App.css';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
function App() {
  return (
    <>
      <Profile/>
      <div className='main-wrapper'>
        <Main/>
        <Header/>
        <Portfolio/>
        <About/>
      </div>
    </>
  );
}

export default App;
