import React from 'react';
import { Page } from '../../layout/page/page';
import { Field, Checkbox } from '../../chips/fields/fields';
import { Tabs, Tab } from '../../chips/tabs/tabs';
import { FAB } from '../../chips/buttons/buttons';
import { Stepper, Step } from '../../chips/tabs/steps';

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
      <div className="checklist">
        <div className="line">
          <label>Recepcion Materiales Motivo / Ambientacion</label>
          <Checkbox id="reception" label="No" checkedLabel="Yes" onChange={this.handleChecked} checked={this.state.reception}/>
          <Checkbox id="receptionOK" label="Correct" checkedLabel="Incorrect" onChange={this.handleChecked} checked={this.state.receptionOK}/>
        </div>
        <div className="line">
          <label>Producto / Surtido</label>
          <Checkbox id="product" label="No" checkedLabel="Yes" onChange={this.handleChecked} checked={this.state.product}/>
          <Checkbox id="productOK" label="Correct" checkedLabel="Incorrect" onChange={this.handleChecked} checked={this.state.productOK}/>
        </div>
        <div className="line">
          <label>Perfilado / Composicion</label>
          <Checkbox id="profiled" label="No" checkedLabel="Yes" onChange={this.handleChecked} checked={this.state.profiled}/>
          <Checkbox id="profiledOK" label="Correct" checkedLabel="Incorrect" onChange={this.handleChecked} checked={this.state.profiledOK}/>
        </div>
        <div className="line">
          <label>Iluminacion</label>
          <Checkbox id="lighting" label="No" checkedLabel="Yes" onChange={this.handleChecked} checked={this.state.lighting}/>
          <Checkbox id="lightingOK" label="Correct" checkedLabel="Incorrect" onChange={this.handleChecked} checked={this.state.lightingOK}/>
        </div>
        <div className="line">
          <label>Fecha Apertura</label>
          <Checkbox id="opening" label="No" checkedLabel="Yes" onChange={this.handleChecked} checked={this.state.opening}/>
          <Checkbox id="openingOK" label="Correct" checkedLabel="Incorrect" onChange={this.handleChecked} checked={this.state.openingOK}/>
        </div>
      </div>
    );
  }
}

class DossierShopWindow extends React.Component {
  render() {
    return (
      <div className="shopwindow">
        <div className="snapshot">
          <img src="" />
        </div>
        <div className="comment">
          <h5>Observaciones</h5>
          <p>
            Escaparate mujer JUANJO OLIVA Primavera 75 Aniversarion 3o Cambio
            con DIN A4 Guia de la moda. Marco lona abatible
          </p>
        </div>
      </div>
    );
  }
}

class DossierReport extends React.Component {
  render() {
    return (
      <div className="report">
        <h5>Valoraciones y Observaciones</h5>
        <div className="observations mui-textfield">
          <textarea placeholder="Observaciones.....">


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

          </textarea>
        </div>
      </div>
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

  renderContent() {
    switch (this.state.tab) {
      case 'checkin':
        return (<DossierCheckin />);
      case 'gallery':
        return (<DossierShopWindow />);
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
          <h2>3er Cambio</h2>
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

  render() {
    return (
      <Page title="New Dossier" icon="folder_open" to="/">
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

export { Dossier, NewDossier };
