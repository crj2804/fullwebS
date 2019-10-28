import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import Contact from "./Contact";
import ToolTips from "./ToolTips";
import ListItems from "./ListData";
import Services from "./DaysHours";
import HList from "./HList";
import ListWho from "./WhoWE";
import Card from 'react-bootstrap/Card';

import "../styling/home.scss";
import "../styling/animations.scss";

function Home() {
    return (
      <ReactFullpage
        verticalCentered
        slidesNavigation
        licenseKey={'DA2FC455-D9C142A7-8C22CB54-7898C64E'}
        scrollOverflow={true}
        sectionsColor={[""]}
        anchors={['home', 'about', 'contact']}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section-one fp-auto-height-responsive" id="bg0">
              <h3 id="title">MJJ Consulting</h3>
             <h3 id="years">Bringing you the best IT services for over 20 years</h3>
             <ToolTips />
                </div>
              <div className="section section-two fp-auto-height-responsive" id="bg1">
                <div className="leftSide">
                  <Card bg="info" text="white" className="cardAni">
                    <Card.Header>Who We Are</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <ListWho />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="middle">
                  <Card bg="info" text="white" className="cardAni">
                    <Card.Header>What we do</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <ListItems />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="rightSide">
                  <Card bg="info" text="white" className="cardAni">
                    <Card.Header>How we do it</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <HList />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="section section-four fp-auto-height-responsive" id="bg3">
                <div className="lefts">
                <Contact />
                <button id="toTop" onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move to Top
                </button>
                <div id="contactInfo">
                  <p>Phone: 703-955-2416</p>
                  <p style={{marginTop: '-10px'}}>Email: mark@mjjconsult.com</p>
                </div>
                </div>
                <div className="rights">
                  <Services />
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }


export default Home;