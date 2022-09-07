import Header from "./components/header";
import SalesCard from "./components/salesCard";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
        </section>
      </main>
			<SalesCard />
    </>
  );
}

export default App;
