import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Volkswagen Golf"
        description="Fyra hjul, fem i betyg"
        backgroundImg="vg.jpg"
        leftBtnText="Köp nu"
        rightBtnText="Hämta nu, Andreas betalar"
      />
      <Section
        title="Volkswagen Buzz"
        description="Framtidens Folkabuss"
        backgroundImg="buzz.jpg"
        leftBtnText="Köp nu"
        rightBtnText="Hämta nu, Andreas betalar"
      />
      <Section
        title="Raggarbilen"
        description="Vipsgrillen är bara runt hörnet"
        backgroundImg="vg2.jpg"
        leftBtnText="Köp nu"
        rightBtnText="Hämta nu, Andreas betalar"
      />
      <Section
        title="Beetle"
        description="När plånboken är liten och komfort inte spelar någon roll"
        backgroundImg="vg3.jpg"
        leftBtnText="Köp nu"
        rightBtnText="Hämta nu, Andreas betalar"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
