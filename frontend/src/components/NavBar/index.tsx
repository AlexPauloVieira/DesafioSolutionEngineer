import ImgLogoStilingue from "assets/img/logotipo-stilingue-horizontal.svg";

const NavBar = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg mb-5 p-3 bg-light border-bottom shadow-sm'>
      <div className='container'>
        <a className='navbar-brand' href='#teste'>
          <img src={ImgLogoStilingue} alt='Stilingue' width='180' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav' style={{ marginLeft: 470 }}>
            <a
              className='nav-item nav-link text-secondary nav-links'
              href='#challenge'
            >
              Desafio
            </a>
            <a
              className='nav-item nav-link text-secondary nav-links'
              href='#fintech'
            >
              Fintechs
            </a>
            <a
              className='nav-item nav-link text-secondary nav-links'
              href='#teste'
            >
              Redes Sociais
            </a>
            <a
              className='nav-item nav-link text-secondary nav-links'
              href='#comparative'
            >
              Comparativo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
