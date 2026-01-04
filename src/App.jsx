import './App.css'
import GameCard from './components/GameCard';

function App() {

  return (
    <div style={{ padding: 30 }}>
      <h1>Party Games 🎉</h1>

      <GameCard
        title="Cards Against Humanity"
        description="Anonymous answers"
        playerPath="/cah"
        hostPath="/cah/host"
      />

      <GameCard
        title="Trivia"
        description="Coming soon"
        disabled
      />
    </div>
  );
}

export default App
