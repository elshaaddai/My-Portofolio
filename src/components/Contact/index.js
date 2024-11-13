import './contact.css'

function Contact() {
  return (
    <div id="contact">
        <h2 className="section_title">CONTACT</h2>
        <h2 className="section_subtitle">My Contact</h2>
        
        <div className="social">
          <div className='contact_item'>
            <a href='elshatambuwun20@gmail.com' className='icon-email contact_social-icon'></a>
            <p className='contact_text'>elshatambuwun20@gmail.com</p>
          </div>
          
          <div className='contact_item'>
            <a href='https://github.com/elshaaddai' className='icon-github contact_social-icon'></a>
            <p className='contact_text'>Github</p>
          </div>

          <div className='contact_item'>
            <a href='https://www.linkedin.com/in/elshaddai-grace-tambuwun-355899304/' className='icon-linkedin contact_social-icon'></a>
            <p className='contact_text'>LinkedIn</p>
          </div>


        </div>
    </div>
  );
};

export default Contact;