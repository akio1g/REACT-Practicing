// components
import githubLogo from './assets/github.png';
import ManageData from './components/ManageData';

// styles
import './App.css';
import ListRender from './components/ListRender';




function App() {
  return (
    <div className="App">
      
      <div className="ManageData">
        <ManageData />
      </div>
      <ListRender />
    </div>
  );
}

export default App;
