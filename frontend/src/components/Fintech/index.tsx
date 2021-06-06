import "./styles.css";
import ImgLogoNubank from "assets/img/nubank-logo-2021.svg";
import ImgLogoPicPay from "assets/img/picpay-logo.png";
import ImgLogoPagSeguro from "assets/img/pagseguro-logo.png";

const Fintech = () => {
  return (
    <div className='mt-5 fintech-container'>
      <h1 className='text-primary'>Fintechs</h1>
      <p className='text-paragraph'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        voluptatum vitae illo vel aspernatur minus quae beatae maiores est
        quaerat aut dolor, non ut dicta inventore laboriosam, qui asperiores
        accusamus perferendis animi cumque. Beatae, sit fugit reiciendis totam
        nobis dolorum, expedita, a tempore optio maxime dolores quibusdam? Nisi
        minima iure sunt, asperiores repudiandae beatae rerum explicabo cumque
        quia ratione, laboriosam maiores labore et aut modi perspiciatis saepe
        totam neque sint at, harum inventore accusamus! Quos sed similique
        quibusdam explicabo, nesciunt reprehenderit nulla dolore doloribus qui
        facilis illum ab fugit velit laborum assumenda? Nam, iste. Fugit magnam
        dolore fugiat non quisquam.
      </p>
      <div className='text-center'>
        <img className='mx-2' src={ImgLogoNubank} alt='Nubank' width='120' />
        <img className='mx-2' src={ImgLogoPicPay} alt='PicPay' width='120' />
        <img
          className='mx-2'
          src={ImgLogoPagSeguro}
          alt='PagSeguro'
          width='114'
        />
      </div>
    </div>
  );
};

export default Fintech;
