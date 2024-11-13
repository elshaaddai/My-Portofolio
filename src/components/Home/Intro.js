import React, { useEffect, useState } from 'react';
import { database } from '../config/firebase/index';
import { ref, onValue } from "firebase/database";

const Intro = () => {
    const [Title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("")
    const [paragraph, setParagraph] = useState("");
    const [ElshaImg, setElshaImg] = useState("")


  useEffect(() => {
    const paragraphRef = ref(database, 'Home');
    onValue(paragraphRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data fetched from Firebase:", data);
      if (data) {
        setTitle(data.Title || "")
        setSubtitle(data.Subtitle || "")
        setParagraph(data.Paragraph || "")
        setElshaImg(data.ElshaImg || "");
      }
    });
  }, []);
  
  return (
    <div className="home_data">
        <h1 className="home_title">{Title}</h1>
        <h3 className="home_subtitle ">{subtitle}</h3>
        <p className="home_description">{paragraph}</p>

        <div 
        className="home_img"
        style={{backgroundImage: `url(${ElshaImg})`}}></div>
    </div>
  )
}

export default Intro;