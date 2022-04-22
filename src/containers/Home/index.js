import './home.css';
import restaurant from '../../Images/lemonsource.jpeg'
import headimg from '../../Images/headimg.jpeg'
import pan from '../../Images/pan.jpeg'
import bottomimg from '../../Images/bottomimg.jpeg'


function Home() {
  return (
    <main className="home">
      <section className='title-container'>
        <div className='title-wrapper'>
          <h1>Authentic Japanese ramen, made entirely from scratch.</h1>
          </div>
      </section>
      <section>
        <div className='image-container' style={{backgroundImage: `url(${restaurant})`}}></div>
      </section>
    
      <section className='image-title-wrapper'>
        <figure>
          <div className='img-text first'>
            <div>No specials, no shortcuts, no excuses.</div>
            <div>When chef Sandra Vega took a two-week trip to Japan, she had never had ramen before. Upon returning to the States, she dedicated herself to learning how to make the perfect bowl. The rest is history.</div>
          </div>
          <div className='image-overlay' style={{backgroundImage: `url(${headimg})`}}>
          </div>
        </figure>
      </section>
     
      <section className='image-title-wrapper'>
        <figure>
          <div className='img-text grid'>
            <div>Ramen is not fast food! At least not here. Our ramen takes time, and we ask for your patience as we prepare what is sure to be the best bowl of soup you’ve ever had.</div>
          </div>
          <div className='image-overlay grid' style={{backgroundImage: `url(${pan})`}}>
          </div>
        </figure>
      </section>
      <section>
        <div className=' bottom-container' style={{backgroundImage: `url(${bottomimg})`}}>
         <div>
            <p>Stopright in.</p> 
            <button>Make a Reservation</button>
         </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default Home;