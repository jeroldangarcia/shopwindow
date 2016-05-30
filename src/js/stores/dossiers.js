
const Centers = [ '0008', '0009', '0010', '0011' ];

const DossierStore = {

  dossiers: [],

  centers: [
    { label: 'Hermosilla', value: '0008' },
    { label: 'Castellana', value: '0009' },
    { label: 'Valencia', value: '0010' },
  ],

  init() {
    for (let i = 0; i < 14; i++) {
      const dossier = {
        id: i,
        title: `Dossier Title ${i}`,
        subtitle: `Subtitle ${i}`,
        center: Centers[i%4],
        date: new Date().toLocaleDateString(),
      };
      this.dossiers.push(dossier);
    }

  },

  all() {
    return this.dossiers;
  },

  byId(id) {
    return this.dossiers.find(dossier => {
      console.log(dossier.id)
      console.log(id)
      return dossier.id == id
    });
  },

  byFilter(criteria, value) {
    const result = this.dossiers.filter((dossier) =>
      dossier[criteria].toUpperCase().indexOf(value.toUpperCase()) > -1
    );
    /*console.log(` dossiers where ${criteria} = ${value}`);
    console.log(result);*/
    return result;
  },

};

DossierStore.init();
export default DossierStore;
