import React, { Component } from 'react';
import './style.css';
import banner3 from '../../assets/Images/banner3.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${banner3})`
};

export default class LocationSection extends Component {
  render() {
    return (
      <section id="one" className="wrapper post" style={ sectionStyle }>
        <div className="inner current">
          <article className="box">
            <header>
              <h2>Missä?</h2>
              <p>Imatra, Kalastuspuisto</p>
            </header>
            <div className="content">Jo kolmatta kertaa tapahtuma järkätään paikassa X</div>
            <footer>Tervetuloa vain!</footer>
          </article>
        </div>
      </section>
    );
  }
}