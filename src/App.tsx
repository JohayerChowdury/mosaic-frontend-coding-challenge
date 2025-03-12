import "./App.css"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
import CurrencyExchangeDashboard from "./features/currencyDashboard/dataDisplayer"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CurrencyExchangeDashboard />
      </header>
    </div>
  )
}

export default App
