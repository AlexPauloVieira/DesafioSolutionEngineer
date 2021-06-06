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
        <Fintech />
        <div className='row px-3 my-5 border-bottom shadow-sm'>
          <h5 className='text-secondary py-3'>
            Comparativo de Crescimento no Youtube
          </h5>
          <div className='col-md-6'>
            <DataTable />
          </div>
          <div className='col-md-6'>
            <LineChart />
          </div>
        </div>
        <div className='row px-3 mb-5 border-bottom shadow-sm' id='testeScroll'>
          <h5 className='text-secondary py-3'>
            Comparativo de Crescimento no Instagram
          </h5>
          <div className='col-md-6'>
            <LineChart />
          </div>
          <div className='col-md-6'>
            <DataTable />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
