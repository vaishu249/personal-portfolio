import './App.css';
import Profile from './Components/Profile';
import Main from './Components/Main/Main';
function App() {
  return (
    <>
      <Profile/>
      <div className='main-wrapper'>
        <Main/>
      </div>
    </>
  );
}

export default App;
