import './App.css';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
function App() {
  return (
    <>
      <Profile/>
      <div className='main-wrapper'>
        <Main/>
      </div>
      <Header/>
    </>
  );
}

export default App;
