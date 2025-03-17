import './App.css';
import Chapter from './components/display/Chapter';
import verses from './content/svs/svs_1';

function App() {
  return (
    <>
    <h1 className='header'>ॐ नमो भगवते वासुदेवाय</h1> <br />
    <Chapter verses={verses}/>
    </>
  );
}

export default App;
