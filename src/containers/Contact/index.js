import './contact.css';
import '../Home';
import lemonsource from '../../Images/lemonsource.jpeg'

function Contact() {
  return (

    <main className="contact-main">

          <section className='title-container image-overlay' style={{backgroundImage: `url(${lemonsource})`}}>
              <div className='title-wrapper'>
                    <h1 className="bg-color-change">We’d Love to Hear From You.</h1>
              </div>
          </section> 

    <section className="contact">

        <div className="body">
        <h1 className="h1">Contact us</h1>
        
        <div id="form">
          <form id="form-id" className="form-class" method="post">
    
                <div className="form-group">
                        <label for="Name" 
                               className="label">
                                   Full Name
                        </label>
        
                    <div className="input-group">
                        <input type="text" 
                                id="Name" 
                                name="Name" 
                                className="form-control" 
                                required />
                    </div>
                </div>

                <div className="form-group">
                        <label for="Email" 
                                className="label">
                                    Email Address
                        </label>
                    <div className="input-group">
                        <input type="email" 
                                id="Email" 
                                name="Email" 
                                className="form-control" 
                                required />
                    </div>
                </div>

                <div className="form-group">
                        <label for="Message" 
                            className="label">
                                Message
                        </label>
                        <div className="input-group">
                            <textarea id="Message" 
                                        name="Message" 
                                        className="form-control" 
                                        rows="6" 
                                        maxlength="3000" 
                                        required>
                            </textarea>
                        </div>
                </div>

                <div className="form-group">
                            <button type="submit" 
                                    id="button" 
                                    className="btn btn-primary btn-lg btn-block">
                                            Send Message
                            </button>
                </div>

            </form>
        </div>

    </div>
</section>

</main>

  
  );
}

export default Contact;


