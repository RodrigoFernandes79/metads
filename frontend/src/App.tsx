import Header from "./components/header";
import SalesCard from "./components/salesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
		<ToastContainer />
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
