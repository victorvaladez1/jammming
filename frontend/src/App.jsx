import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';
import './App.css'

function App() {

   const [results, setResults] = useState([]);
   const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center pt-20 space-y-10">
      <h1 className="text-white text-4xl font-bold drop-shadow-lg">
        Jammming
      </h1>
        <SearchBar />
        <SearchResults results={results} isLoading={loading}/>
    </div>
  );
}

export default App;