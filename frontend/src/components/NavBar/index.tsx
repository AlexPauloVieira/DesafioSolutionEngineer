import ImgLogoStilingue from "assets/img/logotipo-stilingue-horizontal.svg";

const NavBar = () => {
  return (
    <div className='d-flex fixed-top flex-column flex-md-row align-items-center p-3 px-md-4 mb-5 bg-light border-bottom shadow-sm'>
      <div className='container'>
        <nav className='my-2 my-md-0 mr-md-3'>
          <img src={ImgLogoStilingue} alt='Stilingue' width='180' />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
