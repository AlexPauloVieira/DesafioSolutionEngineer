import Challenge from "components/Challenge";
import DataTable from "components/DataTable";
import Fintech from "components/Fintech";
import Footer from "components/Footer";
import LineChart from "components/LineChart";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className='container mt-5'>
        <Challenge id='challenge' />
        <Fintech id='fintech' />
        <div className='row px-3 my-5 border-bottom shadow-sm' id='comparative'>
          <h5 className='text-secondary py-3'>
            Comparativo de Crescimento no Twitter
          </h5>
          <div className='col-md-12'>
            <DataTable />
          </div>
          <div className='col-md-12'>
            <LineChart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
