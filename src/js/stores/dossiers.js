
const Centers = [ '0008', '0009', '0010', '0011' ];

const DossierStore = {

  dossiers: [],

  init() {
    for (let i = 0; i < 10; i++) {
      const dossier = {
        id: i,
        title: `Dossier Title ${i}`,
        subtitle: `Subtitle ${i}`,
        center: Centers[i%4],
        date: new Date().toLocaleDateString(),
      };
      this.dossiers.push(dossier);
    }
    console.table(this.dossiers);
  },

  all() {
    return this.dossiers;
  },

  byId(id) {
    return Array.find(this.dossiers, (dossier) => dossier.id === id);
  },

  byFilter(criteria, value) {
    const result = this.dossiers.filter((dossier) =>
      dossier[criteria].toUpperCase().indexOf(value.toUpperCase()) > -1
    );
    console.log(` dossiers where ${criteria} = ${value}`);
    console.log(result);
    return result;
  },

};

DossierStore.init();
export default DossierStore;
