const MainBody = () => {
  return (
    <>
      <div className='content'>
        <div className='intro'>
          <h1 className='introTitle'>
            Compete on
            <span className='introLogo'>E-Gaming</span>
          </h1>
          <p className='introText'>
            Play the games you love. Compete in free tournaments. Win real money
            & prizes.
          </p>

          <div className='createAccount'>
            <button className='createButton'>
              <img src='/trophy.svg' width='40px' height='40px' />
              <div className='buttonText'>
                <span>Start playing Now!</span>
                <span>Create an Account</span>
              </div>
            </button>
          </div>
        </div>
        <section className='sectionFirst'>
          <div className='gamesPanel'>
            <h2>Available Games</h2>
            <div className=' games'>
              <div className='coc'>
                <img src='/coc.jpg' width='400px' height='400px' />
              </div>
              <div className='coc'>
                <img src='/coc.jpg' width='400px' height='400px' />
              </div>
              <div className='coc'>
                <img src='/coc.jpg' width='400px' height='400px' />
              </div>
              <div className='coc'>
                <img src='/coc.jpg' width='400px' height='400px' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default MainBody;
