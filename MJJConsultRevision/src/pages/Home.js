import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import Contact from "./Contact";
import ToolTips from "./ToolTips";
import ListItems from "./ListData";
import Services from "./DaysHours";

import "../styling/home.scss";
import "../styling/animations.scss";

function Home() {
    return (
      <ReactFullpage
        verticalCentered
        slidesNavigation
        scrollOverflow={true}
        sectionsColor={[""]}
        anchors={['home', 'about', 'services', 'contact']}
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
                <h3 id="head">What We Do</h3>
                <ListItems />
                </div>
                <div className="rightSide">
                  <h3>About Us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Tortor condimentum lacinia quis vel eros donec. Arcu felis bibendum ut tristique et. Adipiscing elit duis tristique sollicitudin nibh sit. Est sit amet facilisis magna etiam tempor. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Vel orci porta non pulvinar. Sed viverra ipsum nunc aliquet bibendum. Massa id neque aliquam vestibulum morbi. Vitae suscipit tellus mauris a. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Non consectetur a erat nam at lectus urna. Et pharetra pharetra massa massa ultricies. Et tortor at risus viverra adipiscing. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Eget arcu dictum varius duis at. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.</p>
                </div>
              </div>
              <div className="section section-three fp-auto-height-responsive" id="bg2">
                <Services />
              </div>
              <div className="section section-four fp-auto-height-responsive" id="bg3">
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