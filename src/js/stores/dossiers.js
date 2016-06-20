
const DOSSIERS = {
  data: [
    {
      id: 1,
      type: 'ESC',
      title: 'Escaparates Primavera 75 Aniversario',
      subtitle: '01/05/2016',
      date: '20/06/2016',
      center: '0008-Pintor Sorolla  (Valencia)',
      provincia: 'Valencia',
      fecha: '20/10/2016'
    },
    {
      id: 2,
      type: 'ESC',
      title: 'Escaparates Ocho Dias de Oro',
      subtitle: '01/06/2016',
      date: '20/06/2016',
      center: '0003-Goya  (Madrid)',
      provincia: 'Madrid',
      fecha: '20/10/2016'
    },
    {
      id: 3,
      type: 'ESC',
      title: 'Escaparates Summer Time',
      subtitle: '1/06/2016 ',
      date: '5/08/2016',
      center: '0008-Pintor Sorolla-Valencia',
      provincia: 'Valencia',
      fecha: '20/10/2016'
    },
    {
      id: 4,
      type: 'ESC',
      title: 'Escaparates Summer Time',
      subtitle: '01/06/2016',
      date: '15/08/2016',
      center: '0003-Goya  (Madrid)',
      provincia: 'Madrid',
      fecha: '20/10/2016'
    },
    {
      id: 5,
      type: 'ESC',
      title: 'Escaparates Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0008-Pintor Sorolla-Valencia',
      provincia: 'Valencia',
      fecha: '10/10/2016'
    },
    {
      id: 6,
      type: 'ESC',
      title: 'Escaparates Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0003-Goya  (Madrid)',
      provincia: 'Madrid',
      fecha: '10/10/2016'
    },
    {
      id: 7,
      type: 'ESC',
      title: 'Escaparate Avance Moda Verano',
      subtitle: '01/06/2016',
      date: '15/06/2016',
      center: '0008-Pintor Sorolla-Valencia',
      provincia: 'Valencia',
      fecha: '10/10/2016'
    },
    {
      id: 8,
      type: 'AMB',
      title: 'Ambientacion Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0003-Goya  (Madrid)',
      provincia: 'Madrid',
      fecha: '10/10/2016'
    },
    {
      id: 9,
      type: 'AMB',
      title: 'Ambientacion Avance Moda Verano',
      subtitle: '01/06/2016',
      date: '15/06/2016',
      center: '0008-Pintor Sorolla-Valencia',
      provincia: 'Valencia',
      fecha: '10/10/2016'
    },
    {
      id: 10,
      type: 'PRO',
      title: 'Promociones Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0003-Goya  (Madrid)',
      provincia: 'Madrid',
      fecha: '10/10/2016'
    },
    {
      id: 11,
      type: 'PRO',
      title: 'Promoción Avance Moda Verano',
      subtitle: '01/06/2016',
      date: '15/06/2016',
      center: '0008-Pintor Sorolla-Valencia',
      provincia: 'Valencia',
      fecha: '10/10/2016'
    },
  ],

  all() {
    return this.data;
  },

  byId(id) {
    return this.data.filter(dossier => dossier.id == id)[0];
  },

  byFilter({ tab, criteria, value }) {
    let dossiers = this.data.filter(dossier => dossier.type === tab);
    if (criteria && criteria != '' && value != '') {
      dossiers = dossiers.filter(dossier => {
        console.log(dossier)
        return dossier[criteria].toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
    }
    return dossiers;
  },
};

const CENTERS = [

  { cod: '0', city: '01	PRECIADOS' },
  { cod: '002', city:	'PZA. CATALUÑA' },
  { cod: '003', city:	'GOYA' },
  { cod: '004', city:	'DUQUE' },
  { cod: '005', city:	'BILBAO' },
  { cod: '006', city:	'CASTELLANA' },
  { cod: '007', city:	'DIAGONAL' },
  { cod: '008', city:	'PINTOR SOROLLA' },
  { cod: '009', city:	'MURCIA' },
  { cod: '010', city:	'PRINCESA' },
  { cod: '011', city:	'VIGO' },
  { cod: '012', city:	'LAS PALMAS' },
  { cod: '013', city:	'MÁLAGA' },
  { cod: '014', city:	'ZARAGOZA - SAGASTA' },
  { cod: '015', city:	'N. CENTRO' },
  { cod: '017', city:	'NERVIÓN ' },
  { cod: '018', city:	'LA CORUÑA' },
  { cod: '019', city:	'VALLADOLID' },
  { cod: '020', city:	'ALICANTE' },
  { cod: '021', city:	'SABADELL' },
  { cod: '022', city:	'LEÓN' },
  { cod: '023', city:	'P. MALLORCA' },
  { cod: '025', city:	'EL CAPRICHO' },
  { cod: '026', city:	'SAN JUAN AZNALFARACHE' },
  { cod: '027', city:	'LINARES' },
  { cod: '029', city:	'CARTAGENA' },
  { cod: '033', city:	'AVILÉS' },
  { cod: '034', city:	'SAN PABLO' },
  { cod: '036', city:	'AVDA. DE FRANCIA' },
  { cod: '037', city:	'SANCHINARRO' },
  { cod: '097', city:	'BADAJOZ-CONQUISTADORES' },
  { cod: '098', city:	'TENERIFE - 3 DE MAYO' },
  { cod: '140', city:	'LISBOA' },
  { cod: '142', city:	'VILA NOVA DE GAIA' },
  { cod: '251', city:	'GRANADA ARABIAL' },
  { cod: '251', city:	'GRANADA ARABIAL HOGAR' },
  { cod: '370', city:	'JEREZ' },
  { cod: '375', city:	'ARROYOMOLINOS' },
  { cod: '376', city:	'BURGOS Hiper' },
  { cod: '377', city:	'VALLADOLID - Hiper' },
  { cod: '378', city:	'GERONA' },
  { cod: '379', city:	'ZARAGOZA-GRAN CASA' },
  { cod: '380', city:	'HUELVA' },
  { cod: '440', city:	'ALCALÁ DE HENARES' },
  { cod: '481', city:	'PUERTO VENECIA (ZARAGOZA)' },
  { cod: '489', city:	'CAMPO NACIONES' },
  { cod: '499', city:	'RONDA DE CÓRDOBA' },
  { cod: '607', city:	'VALDERAS' },
  { cod: '616', city: 'MÉNDEZ ÁLVARO' },
  { cod: '646', city: 'MARINEDA CITY' },
  { cod: '647', city: 'GIJÓN ' },
  { cod: '649', city: 'SERRANO LINGERIE' },
  { cod: '677', city: 'EL EJIDO' },
  { cod: '683', city: 'SANTIAGO DE COMPOSTELA' },
  { cod: '692', city: 'EIBAR II' },
  { cod: '693', city: 'EL TIRO (MURCIA)' },
  { cod: '695', city: 'SALAMANCA' },
  { cod: '696', city: 'POZUELO' },
  { cod: '697', city: 'MARBELLA' },
  { cod: '698', city: 'ALGECIRAS' },
  { cod: '753', city: 'FUENGIROLA' },
  { cod: '792', city: 'EL FERROL' },
  { cod: '810', city: 'EL BERCIAL' },
  { cod: '813', city: 'ELCHE' },
  { cod: '814', city: 'JAÉN' },
  { cod: '864', city: 'ALBACETE II' },
  { cod: '866', city: 'ARROYOSUR' },
  { cod: '872', city: 'SEVILLA ESTE' },
  { cod: '876', city: 'GUADALAJARA' },
  { cod: '884', city: 'BAHÍA SUR' },
  { cod: '897', city: 'BUENAVISTA' },
  { cod: '900', city: 'TARRAGONA' },
  { cod: '901', city: 'CALLAO + SOL DEPORTES' },
  { cod: '902', city: 'PORTAL DEL ÁNGEL' },
  { cod: '905', city: 'ERCILLA' },
  { cod: '906', city: '669	SERRANO' },
  { cod: '907', city: 'F. MACIÁ' },
  { cod: '908', city: 'VALENCIA COLÓN' },
  { cod: '910', city: 'LA VAGUADA' },
  { cod: '911', city: 'CÓRDOBA' },
  { cod: '912', city: 'SIETE PALMAS' },
  { cod: '913', city: 'VITORIA' },
  { cod: '914', city: 'ZARAGOZA - Independencia' },
  { cod: '915', city: 'GRANADA GENIL' },
  { cod: '916', city: 'PARQUESUR' },
  { cod: '918', city: 'ALBACETE ' },
  { cod: '919', city: 'CONSTITUCIÓN' },
  { cod: '920', city: 'ALICANTE' },
  { cod: '922', city: 'BURGOS' },
  { cod: '923', city: 'MALLORCA - JAIME III' },
  { cod: '934', city: 'RAMBLA' },
  { cod: '941', city: 'OVIEDO URÍA' },
  { cod: '942', city: 'OVIEDO SALESAS' },
  { cod: '943', city: 'EIBAR I' },
  { cod: '945', city: 'ARAPILES' },
  { cod: '948', city: 'BAHÍA DE CÁDIZ' },
  { cod: '969', city: 'BAHÍA DE MÁLAGA' },
  { cod: '970', city: 'CASTELLÓN' },
  { cod: '974', city: 'CAN DRAGÓ' },
  { cod: '975', city: 'PAMPLONA' },
  { cod: '983', city: 'MIJAS' },
  { cod: '989', city: 'TALAVERA' },
  { cod: '994', city: 'CORNELLÁ' },
  { cod: '995', city: 'SANTANDER' },
]

const Centers = ['0008', '0009', '0010', '0011'];

const DossierStore = {

  centers: CENTERS.map( center => {
    return { label: center.city, value: center.cod }
  }),

  dossiers: [],
  dossier: null,

  filter: {
    tab: 'ESC',
    criteria: '',
    value: '',
    options: [
      { label: 'Centro', value: 'center' },
      { label: 'Provincia', value: 'provincia' },
      { label: 'Fecha', value: 'fecha' },
    ],
    hidden: true,
  },

  changeTab(tab, cb) {
    this.filter.tab = tab;
    this.reload(cb);
  },

  changeFilter(newFilter, cb) {
    Object.assign(this.filter, newFilter);
    this.reload(cb);
  },

  selectDossier(id, cb) {
    this.dossier = DOSSIERS.byId(id);
    if (cb) cb(this);
  },

  unselectDossier(id, cb) {
    this.dossier = null;
    if (cb) cb(this);
  },

  reload(cb) {
    this.dossiers = DOSSIERS.byFilter(this.filter);
    if (cb) cb(this);
  },

};

DossierStore.reload();
export default DossierStore;
