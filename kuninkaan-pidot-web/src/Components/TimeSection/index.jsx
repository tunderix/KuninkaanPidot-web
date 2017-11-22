import React, { Component } from 'react';
import './style.css';
import banner2 from '../../assets/Images/banner2.jpg';
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${banner2})`
};

export default class TimeSection extends Component {
  render() {
    return (
      <section id="two" className="wrapper post" style={ sectionStyle }>
        <div className="inner current">
          <article className="box">
            <header>
              <h2>Milloin?</h2>
              <p>31.1.2018</p>
            </header>
            <div className="content">Uujea!</div>
            <footer>Tervetuloa vain!</footer>
          </article>
        </div>
      </section>
    );
  }
}