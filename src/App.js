import './App.css';

function App() {

  let data = require('./portfolio_shared_data.json')
  console.log(data)

  return (
    <div className="App">
      <h1>{data.basic_info.name}</h1>
    </div>
  );
}

export default App;
