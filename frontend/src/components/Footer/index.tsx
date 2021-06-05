import ImgLogoStilingue from "assets/img/logotipo-stilingue-vertical.svg";

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark'>
      <p className='text-light'>
        App desenvolvido por{" "}
        <a
          href='https://github.com/AlexPauloVieira'
          target='_blank'
          rel='noreferrer'
        >
          Alex Paulo
        </a>
      </p>
      <p className='text-light'>
        <small>
          <strong>Desafio Solution Engineer</strong>
          <br />
          Projeto desenvolvido como parte do Desafio Solution Engineer da:{" "}
          <a
            href='https://www.instagram.com/stilingue_ia/'
            target='_blank'
            rel='noreferrer'
          >
            @stilingue_ia
          </a>
        </small>
      </p>
      <div className='my-2 my-md-0 mr-md-3'>
        <a href='https://stilingue.com.br/' target='_blank' rel='noreferrer'>
          <img src={ImgLogoStilingue} alt='Stilingue' width='180' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
