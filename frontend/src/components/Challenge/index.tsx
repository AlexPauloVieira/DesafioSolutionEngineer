import "./styles.css";

interface IChallengeProps {
  id: string;
}

const Challenge: React.FC<IChallengeProps> = ({ id }) => {
  return (
    <div className='mt-5 fintech-container' id={id}>
      <h1 className='text-primary'>Desafio</h1>
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
    </div>
  );
};

export default Challenge;
