import Challenge from "components/Challenge";
import Fintech from "components/Fintech";
import Footer from "components/Footer";
import TwitterTable from "components/TwitterTable";
import FacebookTable from "components/FacebookTable";
import InstagramTable from "components/InstagramTable";
import TwitterChart from "components/TwitterChart";
import FacebookChart from "components/FacebookChart";
import InstagramChart from "components/InstagramChart";
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
            Comparativo de Crescimento de Seguidores no Twitter
          </h5>
          <div className='col-md-12'>
            <TwitterTable />
          </div>
          <div className='col-md-12'>
            <TwitterChart />
          </div>
        </div>
        <div className='row px-3 my-5 border-bottom shadow-sm' id='comparative'>
          <h5 className='text-secondary py-3'>
            Comparativo de Crescimento de Likes no Facebook
          </h5>
          <div className='col-md-12'>
            <FacebookTable />
          </div>
          <div className='col-md-12'>
            <FacebookChart />
          </div>
        </div>
        <div className='row px-3 my-5 border-bottom shadow-sm' id='comparative'>
          <h5 className='text-secondary py-3'>
            Comparativo de Crescimento de Seguidores no Instagram
          </h5>
          <div className='col-md-12'>
            <InstagramTable />
          </div>
          <div className='col-md-12'>
            <InstagramChart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
