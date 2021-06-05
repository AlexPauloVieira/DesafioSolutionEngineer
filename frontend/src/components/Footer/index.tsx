const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark'>
      <div className='container'>
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
      </div>
    </footer>
  );
};

export default Footer;
