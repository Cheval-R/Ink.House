import Button from './Button';

const ReplicasArts = ({ arts }) => {
  const artsList = arts.map((art, index) => {
    return (
      <li className='replicas-arts__item'>
        <div className='replicas-arts__img'>
          <img src={art.image} alt={`Изображение картины: ${art.name}`} />
        </div>
        <div className='replicas-arts__info'>
          <p className='replicas-arts__author'>{art.author}</p>
          <h3 className='replicas-arts__name'>{art.name}</h3>
          <p className='replicas-arts__type'>{art.type}</p>
          <p className='replicas-arts__price'>{art.price}</p>
        </div>
        <Button
          modifier='button--square'>
          В корзину
        </Button>
      </li>
    )
  })
  return (
    <div className='replicas-arts'>
      <ul className='replicas-arts__list'>
        {artsList}
      </ul>
    </div>
  );
};

export default ReplicasArts;