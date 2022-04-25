import './about.css';
import chef from '../../Images/chef.jpg'

function About() {
  return (
    <main className="home">
      <h1 className="about">Our Story</h1>
      <section className='content-container'>
        <div className='content-wrapper'>

          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna. At elementum eu facilisis sed odio morbi quis commodo. Lorem mollis aliquam ut porttitor leo a diam. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</h1>
        </div>
      </section>
      <section>
        <div className='image-container' style={{ backgroundImage: `url(${chef})` }}></div>
      </section>
      <section className='content-container'>
        <div className='content-wrapper'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Purus semper eget duis at tellus at urna.At elementum eu facilisis sed odio morbi quis commodo.Lorem mollis aliquam ut porttitor leo a diam.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Duis ultricies lacus sed turpis tincidunt id.Diam ut venenatis tellus in metus vulputate eu scelerisque.Aliquet nibh praesent tristique magna sit amet purus.Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.Posuere urna nec tincidunt praesent.Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.Quis varius quam quisque id diam.Sagittis vitae et leo duis ut diam quam nulla.Orci sagittis eu volutpat odio facilisis mauris.Feugiat in ante metus dictum at tempor commodo.</p>


        </div>
      </section>
    </main>
  );
}

export default About;