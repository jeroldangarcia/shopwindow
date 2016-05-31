import React from 'react';
import { Page } from '../../layout/page/page';
import { FieldGroup, Field, Slider, Select } from '../../chips/fields/fields';
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
      <article className="page checklist">
        <div className="line">
          <label></label>
          <span className="flex center">SI/NO</span>
          <span className="flex center">CORRECTO</span>
        </div>
        <div className="line">
          <label>Recepción Materiales<br /> Motivo / Ambientación</label>
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
        <FAB icon="add_a_photo" to="/photos" onMouseUp={this.handleAddShopWindow}/>
      </div>
    );
  }
}

class DossierReport extends React.Component {
  render() {
    return (
      <article className="page report">
        <center><h1>VALORACIONES Y OBSERVACIONES</h1></center>
        <div className="observations mui-textfield">
          <p>

          PRODUCTO REFERENCIADO:<br />

          EN ESTA OCASIÓN HEMOS TENIDO MÁS PROBLEMAS CON LOS COMPLEMENTOS QUE
          CON LA ROPA, O NO HAY, O NO HAY TALLAS, O NO HAY COLORES....
          SE HA SUSTITUIDO POR PRODUCTOS SIMILARES.<br />

          A DESTACAR:<br />

          EL VESTIDO BLANCO DE TINTORETTO DEL ESCAPARATE DE CHICA NO SE HA
          RECIBIDO EN NINGÚN CENTRO, SE HA SUSTITUIDO POR OTRO DE LA MISMA
          COLECCIÓN.<br />

          EL SUJETADOR DE ES ESCAPARATE DE MUJER SÓLO SE HA PODIDO COLOCAR EN
          PINTOR SOROLLA Y AVENIDA FRANCIA Y EL TOP SEGUNDA OPCIÓN TAMPOCO SE
          HABÍA RECIBIDO, SE HA SUSTITUÍDO POR UN PRODUCTO SIMILAR.<br />

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

  }

  renderContent() {
    switch (this.state.tab) {
      case 'checkin':
        return (<DossierCheckin />);
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
            <Tab id="checkin" label="Check List" active={this.state.tab === 'checkin'} />
            <Tab id="gallery" label="IMG IMPLANTACIÓN" active={this.state.tab === 'gallery'} />
            <Tab id="report" label="VALORACIÓN y OBSERVACIONES" active={this.state.tab === 'report'} />
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
    1: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'5rem'}}>
      <center><h1>DATOS ESCAPARATE</h1></center>
      <br />
      <FieldGroup icon="folder_open">
        <Field icon="folder_open" label="Name" />
      </FieldGroup>
      <FieldGroup icon="description">
        <Field label="Description" />
      </FieldGroup>
      <FieldGroup icon="location_city">
        <Select options={DossierStore.centers} />
        <Field label="Date" />
      </FieldGroup>
      <div style={{flex:'10'}} />
    </div>,
    2: <div className="flex vertical expand center vertical" style={{minHeight:'60rem', padding:'5rem'}}>
      <center><h1>CHECK LIST</h1></center>
      <DossierCheckin />
      <div style={{flex:'10'}} />
    </div>,
    3: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'5rem'}}>
      <center><h1>IMÁGENES IMPLANTACIÓN</h1></center>
      3: <div className="flex vertical expand" style={{minHeight:'60rem', padding:'5rem', overflow: 'auto'}}>
      <DossierShopWindow />
      </div>
      <div style={{flex:'10'}} />
    </div>,
    4: <div className="flex vertical expand center" style={{minHeight:'60rem', padding:'5rem'}}>
      <center><h1>VALORACIONES Y OBSERVACIONES</h1></center>
      <br />
      <textarea style={{ minHeight:'40rem'}}></textarea>
      <div style={{flex:'10'}} />
      <div className="flex expand right">
        <Button label="CANCEL"/>
        <Button label="OK" />
      </div>
    </div>,
  }

  handleStepChanged = (newStep) => {
    this.setState({ step: newStep });
  }

  render() {
    return (
      <Page title="New Dossier" icon="folder_open" to="/" print="print">
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
        <div className="flex expand center" style={{ padding: '2rem 2rem' }}>
          <h2>18 - 04 - 2016&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Escaparates Primavera 75 Aniversario 3er Cambio</h2>
        </div>
      </header>
    );
  }

  renderFooter() {
    return (
      <div className="cover-foot">
        <div className="negative-text">PROMOCIÓN PUNTO DE VENTA</div>
        <div>0008&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Pintor Sorolla&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Valencia</div>
        <br />
      </div>
    );
  }

  renderCover = () => {
    return (
      <article className="printpage cover" style={{backgroundColor:'#fff'}}>
        <div>&nbsp;</div>
        <div className="cover-title">
          <h2>CHECK LIST</h2>
          <div className="cover-title" style={{border:'solid 1px #888', height:'10rem'}}>
            <h1>Escaparates Primavera 75 Aniversario
            <br />
            <center>3º Cambio</center></h1>
          </div>
          <div>
            <center>
              <div>FECHA IMPLANTACION</div>
              <span>18 - 04 - 2016</span>
            </center>
          </div>
        </div>
        {this.renderFooter()}
      </article>
    );
  };

  renderCheckin = () => {
    return (
      <article className="printpage">
        {this.renderHeader()}
        <DossierCheckin />
        {this.renderFooter()}
      </article>
    )
  }

  renderWindow = () => {
    return (
      <article className="printpage" style={{backgroundColor:'#fff'}}>
        {this.renderHeader()}
        <table>
          <tr>
            <td>
              <img src="/images/escaparate1.jpg" width="99%" />
            </td>
            <td style={{ minWidth: '26rem', verticalAlign: 'top' , padding: '1rem'}}>
              <h3 style={{ textTransform: 'uppercase' }}>
                Observaciones
              </h3>
              <p>
                ESCAPARATE CHICA PRIMAVERA 75 ANIVERSARIO.
                <br />
                3º CAMBIO
                <br />
                CON DIN A4 GUIA DE LA MODA
              </p>
            </td>
          </tr>
        </table>
        <br />
        {this.renderFooter()}
      </article>
    );
  }

  renderReport = () => {
    return (
      <article className="printpage" style={{backgroundColor:'#fff'}}>
        {this.renderHeader()}
          <DossierReport />
          <br />
        {this.renderFooter()}
      </article>
    )
  }

  render() {
    return (
      <Page title="Print Dossier" icon="printer" to="/">
        <div className="dossier printer">
          <main>
            {this.renderCover()}
            <br />
            {this.renderCheckin()}
            <br />
            {this.renderWindow()}
            <br />
            {this.renderReport()}
            <br />
            <FAB icon="print" to="" onMouseUp={this.print} />
          </main>
        </div>
      </Page>
    );
  }
}

export { Dossier, NewDossier, PrintDossier };
