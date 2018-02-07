import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="logo"><a href="/">Kuninkaan Pidot</a></div>
				<a href="#menu"><span>Menu</span></a>
      </header>
    );
  }
}