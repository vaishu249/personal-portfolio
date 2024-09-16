import './App.css';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <>
      <Profile/>
      <div className='main-wrapper'>
        <Main/>
        <Header/>
        <Portfolio/>
        <About/>
        <Resume/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
