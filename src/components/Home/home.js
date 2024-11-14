import "./home.css"
import { database } from '../config/firebase/index';
import { ref, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';


const Home = () => {
  const [Title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [paragraph, setParagraph] = useState("");
  const [imageBase64, setImageBase64] = useState("")
  const [igImg, setIgImg] = useState("")
  const [linkedin, setLinkedInImg] = useState("")
  const [github, setGithubImg] = useState("")
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const homeRef = ref(database, 'Home');
    onValue(homeRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data fetched from Firebase:", data);
        console.log("GitHub image data:", data.gihubImg);


        if (data) {
            setTitle(data.Title || "");
            setSubtitle(data.Subtitle || "");
            setParagraph(data.Paragraph || "");

            if (data.ElshaImg) {
                setImageBase64(`data:image/jpeg;base64,${data.ElshaImg}`);
            } 
            if (data.igImg) {
              setIgImg(`data:image/png;base64,${data.igImg}`);
            }
            if (data.linkedinImg){
              setLinkedInImg(`data:image/png;base64,${data.linkedinImg}`)
            }
            if (data.gihubImg) {
              setGithubImg(`data:image/jpeg;base64,${data.gihubImg}`);
            }
        }
    });
    setTimeout(() => setVisible(true), 2000); 
}, []);


  return (
    <section className="home section" id="home">
        <div className={`home_container container grid ${visible ? "visible" : ""}`}>
            <div className="home_content grid">
              <div className="home_social">
                <a 
                href="https://www.instagram.com/elshaa.tambuwun/#" 
                className="home-social_icon icon-instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${igImg})` }}>
                </a>

                <a 
                href="https://www.linkedin.com/in/elshaddai-grace-tambuwun-355899304/" 
                className="home-social_icon icon-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${linkedin})` }}>
                </a>

                <a 
                href="https://github.com/elshaaddai" 
                className="home-social_icon icon-github" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${github})` }}>
                </a>
              </div>

              <div className="home_data">
                <h1 className="home_title">{Title}</h1>
                <h3 className="home_subtitle ">{subtitle}</h3>
                <p className="home_description">{paragraph}</p>
              </div>

              <div 
              className="home_img"
              style={{backgroundImage: `url(${imageBase64})`,
              backgroundColor: '#f0f0f0'
              }}></div>
            </div>
        </div>
    </section>
  )
}

export default Home