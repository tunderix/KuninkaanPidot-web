import React, { Component } from 'react';
import './style.css';
import Footer from '../Footer'
import Header from '../Header'
import LocationSection from '../LocationSection'
import TimeSection from '../TimeSection'
import TitleSection from '../TitleSection'

class App extends Component {

  render() {
    return (
      <div id="app_main">
        <Header></Header>
				<TitleSection></TitleSection>
				<LocationSection></LocationSection>
				<TimeSection></TimeSection>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;