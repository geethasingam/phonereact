import React, { Component } from 'react';

class Home extends Component {
    render(){
      var letterStyle = {
        padding:10,
        margin:10,
        backgroundColor: "pink"
      };
      var letter = {
        color:"red"
      };


        return (
<div style={letterStyle}>
          <h3>Home Page</h3>

          <p>
            <h1 style={letter}>welcome to our oppo phones site</h1>
          </p>

</div>
        );
    }
}

export default Home
