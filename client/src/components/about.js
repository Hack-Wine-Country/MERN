import React, { Component } from 'react';

export default class About extends Component {
  render(){
    return(

      <div>
      <html>
      <body>
      <h1>About Us</h1>
      <h2>William</h2>
        <img src="./statics/William.JPG" className="will"
        alt="William" width="500" height="350">
        </img>
      <h2>Alejandro</h2>
        <img src="./statics/Alejandro.JPG"
        alt="Alejandro" width="500" height="350">
        </img>
      <h2>Juan</h2>
          <img src="./statics/Juan.JPG"
          alt="Juan" width="500" height="350">
          </img>
      </body>
      </html>
      </div>


    );
  }
}
