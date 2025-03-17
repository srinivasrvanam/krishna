import './App.css';
import Sloka from './components/display/Sloka/Sloka';

const lines = ['कौसल्या सुप्रजा राम पूर्वा सन्ध्या प्रवर्तते ।','उत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम् ॥ १॥'];
// const lines = 'test';

function App() {

  return (
    <>
    <h1 className='test'>Sri Krishna Sharanam Mama!</h1>
    <h2>This site is for SVS, BG, VSN</h2>
    <Sloka lines={lines} />
    </>
  );
}

export default App;
