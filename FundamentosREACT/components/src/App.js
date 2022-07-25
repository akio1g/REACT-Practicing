// components
import ManageData from './components/ManageData';

// styles
import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';




function App() {
  return (
    <div className="App">
      
      <div className="ManageData">
        <ManageData />
      </div>
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
