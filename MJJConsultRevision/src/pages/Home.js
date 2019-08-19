import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import Contact from "./Contact";

import "../styling/home.scss";
import "../styling/animation.scss";

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
              <div className="slide slide-one">
                  <h3>C-O-R</h3>
                  <h3>Customization-Optimization-Reliability</h3>
                </div>
                <div className="slide slide-two">
                  <h3>Customization</h3>
                  <button id="learnMore" onClick={() => fullpageApi.moveTo(2, 0)}>
                    Learn More
                  </button>
                </div>
                <div className="slide slide-three">
                  <h3>Optimization</h3>
                </div>
                <div className="slide slide-four">
                  <h3>Reliability</h3>
                </div>
              </div>
              <div className="section section-two fp-auto-height-responsive" id="bg1">
                <div className="leftSide">
                  <h3> About Us </h3>
                </div>
                <div className="rightSide">
                  <h3> Customization </h3>
                  <p> Customization fldksjflkdsjflkdashjlfkhdskjfhdskjhfsdkajhfkjdshfkndsn fknds</p>
                </div>
              </div>
              <div className="section section-three fp-auto-height-responsive" id="bg2">
                <Contact />
                <button id="toTop" onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move to Top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }


export default Home;