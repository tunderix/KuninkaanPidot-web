import React, { Component } from 'react';

import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <h2>
            Otappa yhteyttä!
          </h2>

					<form action="#" method="post">
            <div className="field half first">
              <label>Name</label>
              <input name="name" id="name" type="text" placeholder="Name"></input>
            </div>
              <div className="field half">
                <label>Email</label>
                <input name="email" id="email" type="email" placeholder="Email"></input>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
              </div>
              <ul className="actions">
                <li><input value="Send Message" className="button alt" type="submit"></input></li>
              </ul>
					</form>

          <ul className="icons">
						<li><a  className="icon round fa-facebook"><span className="label">Facebook</span></a></li>
					</ul>

          <div className="copyright">
						&copy; Sami Repo.
					</div>
				</div>
      </footer>
    );
  }
}