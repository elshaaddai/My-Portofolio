import "./home.css"
import Social from './social';
import { database } from '../config/firebase/index';
import { ref, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';


const Home = () => {
  const [Title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [paragraph, setParagraph] = useState("");
  const [imageBase64, setImageBase64] = useState("")

  useEffect(() => {
    const homeRef = ref(database, 'Home');
    onValue(homeRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data fetched from Firebase:", data);
        if (data) {
            setTitle(data.Title || "");
            setSubtitle(data.Subtitle || "");
            setParagraph(data.Paragraph || "");
            if (data.ElshaImg && !data.ElshaImg.startsWith('data:image')) {
                setImageBase64(`data:image/jpeg;base64,${data.ElshaImg}`);
            } else {
                setImageBase64(data.ElshaImg || "");
            }
        }
    });
}, []);
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
              <Social />
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