import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
  
        <div class="content">
         <div id="restos" class="restos"></div>
        </div>
     
        `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.home();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
