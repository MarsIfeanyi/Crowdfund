import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import IdToCrowdFund from "./component/IdToCrowdFund";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mt-10">
        <CreateCampaign />

        <IdToCrowdFund />
      </main>
    </div>
  );
}

export default App;
