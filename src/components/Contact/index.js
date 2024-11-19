import { database } from '../../firebase';
import { ref, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';

function Contact() {
  const [contactTitle, setcontactTitle] = useState("");
  const [contactSubtitle, setcontactSubtitle] = useState("");
  const [igImg, setIgImg] = useState("");
  const [linkedinImg, setLinkedInImg] = useState("");
  const [gihubImg, setGithubImg] = useState("");
  const [emailImg, setEmailImg] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedin] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contactRef = ref(database, 'Contact');
    onValue(contactRef, (snapshot) => {
        const data = snapshot.val();


        if (data) {
            setcontactTitle(data.contactTitle || "");
            setcontactSubtitle(data.contactSubtitle || "");
            setEmail(data.email || "");
            setLinkedin(data.linkedIn || "");
            setInstagram(data.instagram || "");
            setGithub(data.github || "");

            if (data.emailImg){
              setEmailImg(`data:image/jpeg;base64,${data.emailImg}`);
            }

          }
        });
        const homeRef = ref(database, 'Home');
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.igImg) {
          setIgImg(`data:image/png;base64,${data.igImg}`);
        }
        if (data.linkedinImg) {
          setLinkedInImg(`data:image/png;base64,${data.linkedinImg}`);
        }
        if (data.gihubImg) { 
          setGithubImg(`data:image/jpeg;base64,${data.gihubImg}`);
        }
      }
    });
    setTimeout(() => setVisible(true), 100); 
}, []);

  return (
    <div id="contact">
        {/* <h2 className="section_title">{contactTitle}</h2> */}
        <h2 className="section_subtitle">{contactSubtitle}</h2>
        
        <div className="social">
          <div className='contact_item'>
            <a 
            href='https://mail.google.com/mail/u/0/#inbox' 
            className='icon-email contact_social-icon' 
            target='_blank'
            style={{ backgroundImage: `url(${emailImg})` }}
            ></a>
            <p className='contact_text'>{email}</p>
          </div>
          
          <div className='contact_item'>
            <a 
            href='https://github.com/elshaaddai' 
            className='icon-github contact_social-icon' 
            target='_blank'
            style={{ backgroundImage: `url(${gihubImg})` }}
            ></a>
            <p className='contact_text'>{github}</p>
          </div>

          <div className='contact_item'>
            <a 
            href='https://www.linkedin.com/in/elshaddai-grace-tambuwun-355899304/' 
            className='icon-linkedin contact_social-icon' 
            target='_blank'
            style={{ backgroundImage: `url(${linkedinImg})` }}
            ></a>
            <p className='contact_text'>{linkedIn}</p>
          </div>

          <div className='contact_item'>
            <a 
            href='https://www.instagram.com/elshaa.tambuwun/#' 
            className='icon-instagram contact_social-icon' 
            target='_blank'
            style={{ backgroundImage: `url(${igImg})` }}
            ></a>
            <p className='contact_text'>{instagram}</p>
          </div>


        </div>
    </div>
  );
};

export default Contact;