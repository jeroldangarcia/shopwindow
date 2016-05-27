import React from 'react';
import { Page } from '../../layout/page/page';
import { Field, Slider, Select } from '../../chips/fields/fields';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { Button, FAB, CheckButton } from '../../chips/buttons/buttons';
import { Stepper, Step } from '../../chips/tabs/steps';
import { Cards, Card } from '../../layout/cards/cards';
import Dialog from '../../layout/dialogs/dialogs';
import { browserHistory } from 'react-router';

import DossierStore from '../../../stores/dossiers';

import './dossier.css';

class DossierCheckin extends React.Component {

  state = {
    reception: 'none',
    receptionOK: 'none',
    product: 'none',
    productOK: 'none',
    profiled: 'none',
    profiledOK: 'none',
    lighting: 'none',
    lightingOK: 'none',
    opening: 'none',
    openingOK: 'none',
  }

  handleChecked = (id, value) => {
    console.log('checkbox id: ' + id + ' is ' + value);
    this.setState({ [id]: value });
  };

  render() {
    return (
      <article className="page checklist mui-panel">
        <div className="line">
          <label></label>
          <span className="flex center">RECEIVED</span>
          <span className="flex center">CORRECT</span>
        </div>
        <div className="line">
          <label>Recepcion Materiales Motivo / Ambientacion</label>
          <CheckButton id="reception" value={this.state.reception} onValueChanged={this.handleChecked}/>
          <CheckButton id="receptionOK" value={this.state.receptionOK} onValueChanged={this.handleChecked}/>
        </div>
        <div className="line">
          <label>Producto / Surtido</label>
          <CheckButton id="product" value={this.state.product} onValueChanged={this.handleChecked}/>
          <CheckButton id="productOK" value={this.state.productOK} onValueChanged={this.handleChecked}/>
        </div>
        <div className="line">
          <label>Perfilado / Composicion</label>
          <CheckButton id="profiled" value={this.state.profiled} onValueChanged={this.handleChecked}/>
          <CheckButton id="profiledOK" value={this.state.profiledOK} onValueChanged={this.handleChecked}/>
        </div>
        <div className="line">
          <label>Iluminacion</label>
          <CheckButton id="lighting" value={this.state.lighting} onValueChanged={this.handleChecked}/>
          <CheckButton id="lightingOK" value={this.state.lightingOK} onValueChanged={this.handleChecked}/>
        </div>
        <div className="line">
          <label>Fecha Apertura</label>
          <CheckButton id="opening" value={this.state.opening} onValueChanged={this.handleChecked}/>
          <CheckButton id="openingOK" value={this.state.openingOK} onValueChanged={this.handleChecked}/>
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

  defaultProps = {
    step: 1,
  }

  state = {
    step: this.defaultProps.step,
  }

  steps = {
    1: <div>
      <Field label="Name" />
      <Field label="Description" />
      <Select options={DossierStore.centers} />
      <Button label="CANCEL" classes="raised"/>
      <Button label="OK" />
    </div>,
    2: <DossierCheckin />,
    3: <DossierReport />,
  }

  handleStepChanged = (newStep) => {
    this.setState({ step: newStep });
  }

  render() {
    return (
      <Page title="New Dossier" icon="folder_open" to="/">
        <div className="dossier">
          <main className="flex">
            <Step>{this.steps[this.state.step]}</Step>
          </main>
          <Stepper
            steps={[1, 2, 3]}
            step={this.state.step}
            onStepChanged={this.handleStepChanged}
          />
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

  renderCover = () => {
    return (
      <article className="flex center centred">
        <h1>Primavera 75 Aniversario</h1>
      </article>
    );
  };

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
          <main>xxx
            {this.renderCover()}
            <br />
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
