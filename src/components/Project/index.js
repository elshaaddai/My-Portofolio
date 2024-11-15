import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../config/firebase/index";
import '../Project/project.css'

const Project = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const portfolioRef = ref(database, "Project");
      onValue(portfolioRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
          const formattedData = [
            {
              img: data.portofolio,
              desc: data.portofolioDesc,
            },
            {
              img: data.dicoding,
              desc: data.dicodingDesc,
            },
            {
              img: data.revoU1,
              desc: data.revoUDesc,
            },
            {
              img: data.UIlibrary,
              desc: data.UIlibraryDesc,
            },
          ];
          setPortfolioData(formattedData);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header" id="project">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | Elsha Tambuwun</title>
          <meta name="description" content="Portfolio of Elsha Tambuwun projects" />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="section_title">Project</h1>
            <h2 className="section_subtitle">My Project</h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {portfolioData.map((data, i) => (
            <div key={i} className="po_item">
              {data.img && (
                <img src={`data:image/png;base64,${data.img}`} alt={`Project ${i}`} />
              )}
              {data.desc && (
                <div className="content">
                  <p>{data.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Project;




















// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import { ref, onValue } from "firebase/database";
// import { database} from "../config/firebase/index";

// const Project = () => {
//   const [portfolioData, setPortfolioData] = useState([]);

//   useEffect(() => {
//     const fetchData = () => {
//       const portfolioRef = ref(database, "Project");
//       onValue(portfolioRef, (snapshot) => {
//         const data = snapshot.val();
//         console.log(data);
//         if (data) {
//           const formattedData = [
//             {
//               img: data.portofolio,
//               desc: data.portofolioDesc,
//             },
//             {
//               img: data.dicoding,
//               desc: data.dicodingDesc,
//             },
//             {
//               img: data.revoU1,
//               desc: data.revoUDesc,
//             },
//             {
//               img: data.UIlibrary,
//               desc: data.UIlibraryDesc,
//             },
//             {
//               email: data.your_email,
//             },
//           ];
//           setPortfolioData(formattedData);
//         }
//       });
//     };
//     fetchData();
//   }, []);
  
//   return (
//     <HelmetProvider>
//       <Container className="About-header" id="project">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Portfolio | Elsha Tambuwun </title>
//           <meta name="description" content="Portfolio of Elsha Tambuwun projects"/>
//         </Helmet>

//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="section_title"> Project </h1>
//             <h2 className="section_subtitle">My Project</h2>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>

//         <div className="mb-5 po_items_ho">
//           {portfolioData.map((data, i) => (
//               <div key={i} className="po_item">
//                 <img src={`data:image/png;base64,${data.img}`}   />
//                 <div className="content">
//                   <p>{data.desc}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };

// export default Project;