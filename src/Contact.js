function Contact() {
    return (
        <div className="container">
            <h1>contact</h1>
            <div>
                <p>Feel free to reach out or connect with me!</p>
                <p className="text">
                <span>E-mail <i class="fas fa-envelope"></i>:</span> freda.hon@gmail.com</p>
                <p className="text">
                <span>LinkedIn <i className="fab fa-linkedin"></i>:</span> <a href="https://www.linkedin.com/in/freda-hon/">freda-hon</a></p>
                <p className="text">
                <span>Medium <i className="fab fa-medium"></i>:</span> <a href="https://medium.com/@freda.hon">@freda.hon</a></p>
            </div>
            <h2>Inquiry Form</h2>
            <form 
                action="mailto:freda.hon@gmail.com"
                method="POST"
                enctype="multipart/form-data"
                name="EmailForm"
            >
                Name: <input type="text"></input><br></br>
                Email: <input type="email" name="Contact-Email"></input><br></br>
                Message: <textarea name="Contact-Message" rows="6" cols="20"> </textarea><br></br>           
                <button type="submit" value="Submit">Send</button>
                </form>

      </div>
    )
}

export default Contact;