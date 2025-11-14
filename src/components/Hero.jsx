const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__wrapper'>
          <img className="hero__image" src="/hero-img.png" alt="" width={540} height={621} />
          <div className='hero__content'>
            <h1 className='hero__title'>
              Реплики картин от <span className='green-text'>Ink. House</span>
            </h1>
            <p className='hero__intro'>
              Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
            </p>
            <a className='button button--square' href="#!">Продукция</a>
          </div >
        </div>
      </div>
    </section>
  );
};

export default Hero;