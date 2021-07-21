import contactImage from './Images/portfolio-contact.png';
import contactImageC from './Images/portfolio-contact-cyan.png';
import contactImageO from './Images/portfolio-contact-orange.png';
import contactImageB from './Images/portfolio-contact-blue.png';


function Contact() {
    return (
        <div  className="container" id="contact">
            <h1>contact me</h1>
            <div className="container-div">
                <div className="container-form">
                    {/* <h2>Inquiry Form</h2> */}
                    <form 
                        action="mailto:freda.hon@gmail.com"
                        method="POST"
                        enctype="multipart/form-data"
                        name="EmailForm"
                    >
                        <input type="text" placeholder="name"></input><br></br>
                        <input type="email" placeholder="email"></input><br></br>
                        <textarea placeholder="type your message here..."></textarea><br></br>           
                        <button type="submit" value="Submit">Send</button>
                    </form> 
                </div>

                <div className="contacts-div">
                    <div>
                    <p>Feel free to reach out or connect with me!</p>
                    <p className="text">
                    <span>E-mail <i class="fas fa-envelope"></i>:</span> freda.hon@gmail.com</p>
                    <p className="text">
                    <span>LinkedIn <i className="fab fa-linkedin"></i>:</span> <a href="https://www.linkedin.com/in/freda-hon/">freda-hon</a></p>
                    <p className="text">
                    <span>Medium <i className="fab fa-medium"></i>:</span> <a href="https://medium.com/@freda.hon">@freda.hon</a></p>
                </div>
                
                <div className="contact-imgs">
                    <img src={contactImage} alt="Freda" className="contact-img"></img>
                    <img src={contactImageO} alt="Freda" className="contact-img-o"></img>
                    <img src={contactImageB} alt="Freda" className="contact-img-b"></img>
                    <img src={contactImageC} alt="Freda" className="contact-img-c"></img>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Contact;