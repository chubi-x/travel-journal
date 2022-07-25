import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./Data/data";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}

export default App;

