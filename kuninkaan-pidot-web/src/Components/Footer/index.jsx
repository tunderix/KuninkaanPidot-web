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
              <label>Nimi</label>
              <input name="name" id="name" type="text" placeholder="Nimi"></input>
            </div>
              <div className="field half">
                <label>Sähköposti</label>
                <input name="email" id="email" type="email" placeholder="Sähköposti"></input>
              </div>
              <div className="field">
                <label>Viesti</label>
                <textarea name="message" id="message" rows="6" placeholder="Viesti"></textarea>
              </div>
              <ul className="actions">
                <li><input value="lähetä" className="button alt" type="submit"></input></li>
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