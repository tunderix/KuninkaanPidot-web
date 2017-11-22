import React, { Component } from 'react';
import './style.css';
import banner1 from '../../assets/Images/banner1.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${banner1})`
};

export default class TitleSection extends Component {


  render() {
    return (
      <section id="banner" style={ sectionStyle }>
        <div className="inner current bg-img">
          <h1>
            Kuninkaan Pidot
          </h1>
        </div>
      </section>
    );
  }
}