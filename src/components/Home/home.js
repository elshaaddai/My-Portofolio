import React, { useEffect, useState } from 'react';
import { database } from '../../firebase/index';
import { ref, onValue } from "firebase/database";
import Loading from "../Loading/index";


const Home = () => {
  const [Title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [paragraph, setParagraph] = useState("");
  const [imageBase64, setImageBase64] = useState("")
  const [igImg, setIgImg] = useState("")
  const [linkedin, setLinkedInImg] = useState("")
  const [github, setGithubImg] = useState("")
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const homeRef = ref(database, 'Home');

    const unsubscribe = onValue(homeRef, (snapshot) => {
      const data = snapshot.val();


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
      const timer = setTimeout(() => {
          setIsLoading(false);
          setVisible(true);
      }, 1000);

      return () => {
        unsubscribe();
        clearTimeout(timer);
      }
  },[]);
    

    if (isLoading) {
      return <Loading />
    }



  return (
    <section className="home section" id="home">
        <div className={`home_container ${visible ? "visible" : ""}`}>
            <div className="home_content">
              <div className="home_social">
                <a 
                href="https://www.instagram.com/elshaa.tambuwun/#" 
                className="home-social_icon icon-instagram" 
                target="_blank" 
                style={{ backgroundImage: `url(${igImg})` }}>
                </a>

                <a 
                href="https://www.linkedin.com/in/elshaddai-grace-tambuwun-355899304/" 
                className="home-social_icon icon-linkedin" 
                target="_blank" 
                style={{ backgroundImage: `url(${linkedin})` }}>
                </a>

                <a 
                href="https://github.com/elshaaddai" 
                className="home-social_icon icon-github" 
                target="_blank" 
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