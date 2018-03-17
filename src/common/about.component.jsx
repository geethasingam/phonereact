import React, { Component } from 'react';

class About extends Component {
    render(){

      var letterStyle = {
        backgroundColor: "pink",
            };

      var letter = {
        color:"red"
      };

        return (
          <div style={letterStyle} className="container">

          <h1 style={letter} >About oppo</h1>

   <h2>Enjoyed by Young People Worldwide</h2>

<p>The selfie expert and leader, OPPO is ranked as the number 4 smartphone brand globally since 2016* and is
providing excellent selfie experiences to more and more young people around the world.

For the last 10 years, OPPO has been focusing on selfie technology breakthroughs. OPPO innovated selfie
beautification and drove the selfie trend in the smartphone industry. In 2017, OPPO introduced A.I. to the front
camera and is leading a brand new era of the selfie.</p>

</div>);
    }
}

export default About
