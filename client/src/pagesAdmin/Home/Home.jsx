import React,{useEffect} from "react";
import BackGroundGlobal from "../../components/backgrounds/BackgroundGlobal";
import { styled } from "styled-components";
import AOS from "aos";
import 'aos/dist/aos.css';

import NavBarNavigation from "../../features/Navigation/navBarNavigation/NavBarNavigation";
import FooterSection from "../../components/Footer/Footer";


function HomeAdmin() {

  useEffect(() => {
    AOS.init({delay: 250, duration: 1000,});
  },[])

  return (
    <ContinerHomePage>
      <BackGroundGlobal></BackGroundGlobal>
      <NavBarNavigation></NavBarNavigation>
      

      <Footer>
     <FooterSection></FooterSection>
     </Footer>  
    </ContinerHomePage>
  );
}

const ContinerHomePage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: calc(100vh * (1 - 0.1));
  width: 100%;
  /* padding-top: calc(100vh * 0.1); */
  .firstPage{
    width: 100%;
    min-height: calc(100vh * (1 - 0.1));
    display: flex;
  flex-wrap: wrap;
  align-items: center;
  }
  .secondPage{
    /* background-color: rgba(31, 37, 81, 0.6); */
    width: 100%;
    height: max-content;
  
  }
`;

const Footer = styled.div`

  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  `

export default HomeAdmin;