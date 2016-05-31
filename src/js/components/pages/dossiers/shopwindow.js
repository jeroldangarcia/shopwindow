import React from 'react';
import { Page } from '../../layout/page/page';
import Image from '../../chips/images/images';
import './cinema.css';

export default class ShopWindow extends React.Component {

  render() {
    return (
      <Page title="ShopWindow" to="/">
        <div className="cinema">
          <div className="screen-box">
            <div className="screen">
              <img src="/images/escaparate1.jpg" width="100%" />
            </div>
          </div>
          <div className="cinema-info">
            <p>
              ESCAPARATE CHICA PRIMAVERA 75 ANIVERSARIO.
              <br />
              3º CAMBIO
              <br />
              CON DIN A4 GUIA DE LA MODA
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
