import './App.css';
import GameBoard from './GameBoard'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Squares</h1>
        <div className='currScore'>0</div>
        <div className='highScore'>0</div>
      </header>
      <GameBoard />
    </div>
  );
}

export default App;
