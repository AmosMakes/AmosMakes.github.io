
import About from './components/about'
import Main from './components/main'
import './App.css'

// i should have written more comments well maybe someday later


function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700 overflow-hidden">
      <About />
      <Main />
    </div>
  );
}

export default App;