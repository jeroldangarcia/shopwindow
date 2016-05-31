
const Centers = ['0008', '0009', '0010', '0011'];

const DossierStore = {

  dossiers: [
    {
      id: 1,
      title: 'Escaparates Primavera 75 Aniversario',
      subtitle: '01/05/2016',
      date: '20/06/2016',
      center: '0008-Pintor Sorolla  (Valencia)',
    },
    {
      id: 2,
      title: 'Escaparates Ocho Dias de Oro',
      subtitle: '01/06/2016',
      date: '20/06/2016',
      center: '0003-Goya  (Madrid)',
    },
    {
      id: 3,
      title: 'Escaparates Summer Time',
      subtitle: '1/06/2016 ',
      date: '5/08/2016',
      center: '0008-Pintor Sorolla-Valencia',
    },
    {
      id: 4,
      title: 'Escaparates Summer Time',
      subtitle: '01/06/2016',
      date: '15/08/2016',
      center: '0003-Goya  (Madrid)',
    },
    {
      id: 5,
      title: 'Escaparates Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0008-Pintor Sorolla-Valencia',
    },
    {
      id: 6,
      title: 'Escaparates Secretos de Belleza',
      subtitle: '01/05/2016',
      date: '15/05/2016',
      center: '0003-Goya  (Madrid)',
    },
    {
      id: 7,
      title: 'Escaparate Avance Moda Verano',
      subtitle: '01/06/2016',
      date: '15/06/2016',
      center: '0008-Pintor Sorolla-Valencia',
    },
  ],

  centers: [
    { label: 'Hermosilla', value: '0008' },
    { label: 'Castellana', value: '0009' },
    { label: 'Valencia', value: '0010' },
  ],

  init() {
    /*
    for (let i = 0; i < 14; i++) {
      const dossier = {
        id: i,
        title: `Dossier Title ${i}`,
        subtitle: `Subtitle ${i}`,
        center: Centers[i%4],
        date: new Date().toLocaleDateString(),
      };
      this.dossiers.push(dossier);
    }*/
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
