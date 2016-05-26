import React from 'react';
import { Page } from '../../layout/page/page';
import { Field, Slider } from '../../chips/fields/fields';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { FAB } from '../../chips/buttons/buttons';
import { Stepper, Step } from '../../chips/tabs/steps';
import { Cards, Card } from '../../layout/cards/cards';
import Dialog from '../../layout/dialogs/dialogs';
import { browserHistory } from 'react-router';

import './dossier.css';

class DossierCheckin extends React.Component {

  state = {
    reception: false,
    receptionOK: false,
    product: false,
    productOK: false,
    profiled: false,
    profiledOK: false,
    lighting: false,
    lightingOK: false,
    opening: false,
    openingOK: false,
  }

  handleChecked = (id, value) => {
    console.log('checkbox id: ' + id + ' is ' + value);
    this.setState({ [id]: value });
  };

  render() {
    return (
      <article className="page checklist mui-panel">
        <div className="line">
          <label>Recepcion Materiales Motivo / Ambientacion</label>
          <Slider id="reception" valueOn="Yes" valueOff="No" checked={this.state.reception} />
          <Slider id="receptionOK" valueOn="Correct" valueOff="Incorrect" checked={this.state.receptionOK} />
        </div>
        <div className="line">
          <label>Producto / Surtido</label>
          <Slider id="product" valueOn="Yes" valueOff="No" checked={this.state.product} />
          <Slider id="productOK" valueOn="Correct" valueOff="Incorrect" checked={this.state.productOK} />
        </div>
        <div className="line">
          <label>Perfilado / Composicion</label>
          <Slider id="profiled" valueOn="Yes" valueOff="No" checked={this.state.profiled} />
          <Slider id="profiledOK" valueOn="Correct" valueOff="Incorrect" checked={this.state.profiledOK} />
        </div>
        <div className="line">
          <label>Iluminacion</label>
          <Slider id="lighting" valueOn="Yes" valueOff="No" checked={this.state.lighting} />
          <Slider id="lightingOK" valueOn="Correct" valueOff="Incorrect" checked={this.state.lightingOK} />
        </div>
        <div className="line">
          <label>Fecha Apertura</label>
          <Slider id="opening" valueOn="Yes" valueOff="No" checked={this.state.opening} />
          <Slider id="openingOK" valueOn="Correct" valueOff="Incorrect" checked={this.state.openingOK} />
        </div>
      </article>
    );
  }
}

class DossierShopWindow extends React.Component {

  handleAddShopWindow = () => {
    const dialog = (<Dialog>xxx</Dialog>);
    this.props.onAddPhoto(dialog);
  }

  handleCardSelected = () => {
    browserHistory.push('/shopwindow');
  }

  render() {

    const info = (
      <p>
        ESCAPARATE CHICA
        <br />
        PRIMAVERA 75 ANIVERSARIO. 3er CAMBIO
        <br />
        CON DIN A4 GUIA DE LA MODA
      </p>
    )

    return (
      <div className="shopwindow">
        <Cards>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
          <Card onSelected={this.handleCardSelected} className="page">{info}</Card>
        </Cards>
        <FAB icon="add_a_photo" to="/shopwindow" onMouseUp={this.handleAddShopWindow}/>
      </div>
    );
  }
}

class DossierReport extends React.Component {
  render() {
    return (
      <article className="page report mui-panel">
        <h5>Valoraciones y Observaciones</h5>
        <div className="observations mui-textfield">
          <p>

          PRODUCTO REFERENCIADO:

          EN ESTA OCASIÓN HEMOS TENIDO MÁS PROBLEMAS CON LOS COMPLEMENTOS QUE
          CON LA ROPA, O NO HAY, O NO HAY TALLAS, O NO HAY COLORES....
          SE HA SUSTITUIDO POR PRODUCTOS SIMILARES.

          A DESTACAR:

          EL VESTIDO BLANCO DE TINTORETTO DEL ESCAPARATE DE CHICA NO SE HA
          RECIBIDO EN NINGÚN CENTRO, SE HA SUSTITUIDO POR OTRO DE LA MISMA
          COLECCIÓN.

          EL SUJETADOR DE ES ESCAPARATE DE MUJER SÓLO SE HA PODIDO COLOCAR EN
          PINTOR SOROLLA Y AVENIDA FRANCIA Y EL TOP SEGUNDA OPCIÓN TAMPOCO SE
          HABÍA RECIBIDO, SE HA SUSTITUÍDO POR UN PRODUCTO SIMILAR.

          </p>
        </div>
      </article>
    );
  }
}

class Dossier extends React.Component {

  state = {
    tab: 'checkin',
  }

  handleChangeTab = (id) => {
    this.setState({ tab: id });
  }

  handleAddPhoto = () => {
    alert();
  }

  renderContent() {
    switch (this.state.tab) {
      case 'checkin':
        return (<div><DossierCheckin /><DossierReport /></div>);
      case 'gallery':
        return (<DossierShopWindow onAddPhoto={this.handleAddPhoto}/>);
      case 'report':
        return (<DossierReport />);
      default:
        return (<DossierCheckin />);
    }
  }

  render() {
    return (
      <div className="dossier">
        <header>
          <h1>Primavera 75 Aniversario</h1>

          <div className="flex expand" style={{padding:'0 2rem'}}>
            <span className="flex expand"><h2>3er Cambio</h2></span>
            <span><h2>18 / 04 / 2016</h2></span>
          </div>

          <Tabs onChanged={this.handleChangeTab}>
            <Tab id="checkin" label="Check-In" active={this.state.tab === 'checkin'} />
            <Tab id="gallery" label="Gallery" active={this.state.tab === 'gallery'} />
            <Tab id="report" label="Report" active={this.state.tab === 'report'} />
          </Tabs>
        </header>
        <main>
          {this.renderContent()}
          <FAB icon="subdirectory_arrow_left" to="" onMouseUp={this.props.done}/>
        </main>
      </div>
    );
  }
}

class NewDossier extends React.Component {

  handleStepChanged = (steps) => {
    console.log(step);
  }

  print = () => <Button icon="print" />;

  render() {
    return (
      <Page title="New Dossier" icon="folder_open" to="/" action={print}>
        <div className="dossier">
          <main className="flex">
            <Step id="step1">
              <div>
                <Field label="Name" />
                <Field label="Description" />
              </div>
            </Step>
            <Step id="step2">
              <DossierCheckin />
            </Step>
            <Step id="step3">
              <DossierReport />
            </Step>
            <FAB icon="arrow_forward" to="/" onMouseUp={this.props.done}/>
          </main>
          <Stepper steps={['step1', 'step1', 'step3']} onStepChanged={this.handleStepChanged}/>
        </div>
      </Page>
    );
  }
}

class PrintDossier extends React.Component {

  print = () => {
    window.print();
  }

  renderHeader() {
    return (
      <header>
        <h1>Primavera 75 Aniversario</h1>
        <div className="flex expand" style={{ padding: '0 2rem' }}>
          <span className="flex expand"><h2>3er Cambio</h2></span>
          <span><h2>18 / 04 / 2016</h2></span>
        </div>
      </header>
    );
  }

  renderWindow = () => {
    return (
      <article >
        {this.renderHeader()}
        <table className="mui-panel">
          <tr>
            <td>
              <img src="/images/escaparate1.jpg" width="99%" />
            </td>
            <td style={{ minWidth: '26rem', verticalAlign: 'top' , padding: '1rem'}}>
              <h3 style={{ textTransform: 'uppercase' }}>
                Observaciones
              </h3>
            </td>
          </tr>
        </table>
      </article>
    );
  }

  render() {
    return (
      <Page title="Print Dossier" icon="printer" to="/">
        <div className="dossier printer">
          <main>

            {this.renderHeader()}
            <DossierCheckin />
            <br />
            {this.renderWindow()}
            <br />
            {this.renderWindow()}
            <br />
            {this.renderWindow()}
            <br />
            {this.renderWindow()}
            <br />
            {this.renderHeader()}
            <DossierReport />
            <br />
            <FAB icon="print" to="" onMouseUp={this.print} />

          </main>
        </div>
      </Page>
    );
  }
}

export { Dossier, NewDossier, PrintDossier };
