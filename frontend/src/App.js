import logo from './logo.svg';
import './App.css';
import DataDisplay from './components/DataDisplay';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Create from './components/Create'

function App() {
  return (
    <div className="App">
      {/* <DataDisplay></DataDisplay> */}
      <Create></Create>
    </div>
  );
}

export default App;
