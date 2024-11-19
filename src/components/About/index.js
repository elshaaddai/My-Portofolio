import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { ref, onValue } from "firebase/database";

const About = () => {
    const [Sec_title, setSecTitle] = useState("");
    const [sec_subtitle, setSecSubtitle] = useState("");
    const [Desc1, setDesc1] = useState("");
    const [Desc2, setDesc2] = useState("");
    const [ElshaImg2, setElshaImg2] = useState("");
  
    useEffect(() => {
      const AboutRef = ref(database, 'About');
      onValue(AboutRef, (snapshot) => {
          const data = snapshot.val();
          console.log("Data fetched from Firebase:", data);
  
  
          if (data) {
              setSecTitle(data.Sec_title || "");
              setSecSubtitle(data.sec_subtitle || "");
              setDesc1(data.desc1 || "");
              setDesc2(data.desc2 || "");
              setElshaImg2(data.elshaImg2);

      }});
  }, []);
  return (
    <section className="about-section" id="about">
        {/* title */}
        <h2 className="section_title">{Sec_title}</h2>
        <h2 className="section_subtitle">{sec_subtitle}</h2>

        <div className="about_container">
            {/* image & description */}
            <img className="about_img" 
            src={`data:image/jpeg;base64,${ElshaImg2}`}
            style={{ width: '20%', height: 'auto', borderRadius: '1.5rem' }}
            />
            <div className="about_data">
                <p className='desc1'>{Desc1}</p>
                <p className='desc2'>{Desc2}</p>
            </div>  
        </div>
    </section>
  )
}

export default About;