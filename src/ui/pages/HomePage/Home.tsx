import Container from "react-bootstrap/Container";
import React from "react";

import Avatar from "ui/components/avatars/Avatar";
import InformationLeft from "ui/components/Information/Left/InformationLeft";
import InformationRight from "ui/components/Information/Right/InformationRight";

import CCarousel from "ui/components/carousel/CCarousel";
import information from "data/Variaveis";

const Home: React.FC = () => {
  return (
    <>
      <CCarousel />

      <Container>
        <Avatar />

        <hr className="featurette-divider" />

        <InformationLeft context={information[0]} />

        <hr className="featurette-divider" />

        <InformationRight context={information[1]} />

        <hr className="featurette-divider" />

        <InformationLeft context={information[2]} />

        <hr className="featurette-divider" />
      </Container>
    </>
  );
};

export default Home;
