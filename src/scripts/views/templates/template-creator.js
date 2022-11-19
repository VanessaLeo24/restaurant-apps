import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <div class="resto-detail">
    <img class="resto__image lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
        <div class="resto__info">
            <h3>INFORMATION ABOUT RESTO</h3>
            <h4>Name : </h4>
            <p>${resto.name}</p>
            <h4>Description :</h4>
            <p>${resto.description}</p>
            <h4>City :</h4>
            <p>${resto.city}</p>
            <h4>Address :</h4>
            <p>${resto.address}</p>
            <h4>Category</h4>
            <p>${resto.categories.map((ctg) => ctg.name).join(' | ')}</p>
            <h4>Foods Menu :</h4>
            <p>${resto.menus.foods.map((food) => food.name).join(' | ')}</p>
            <h4>Drinks Menu :</h4>
            <p>${resto.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
            <h4>Rating :</h4>
            <p>⭐️ <span>${resto.rating}</span></p>
            <br />
        </div>
    </div>
   
    ${resto.customerReviews.reduce((show, value) => show.concat(`
    <br />
    <div class="cust__review">
        <p class="name">${value.name}</p>
        <p class="review">${value.review}</p>
        <p class="date">${value.date}</p>
    </div>
    `), '<h4 id="cust_review_title">Customer Reviews :</h4>')}
`;

const createRestoItemTemplate = (resto) => `
    <article class="card-item">
      <img class="card-image lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
      <p id="city">Kota ${resto.city}</p>
      <article class="item-desc">
          <h3 class="resto_name"><a href="/#/detail/${resto.id}" class="name-link">${resto.name || '-'}</a></h3>
          <p id="rating">Rating : ${resto.rating || '-'}</p>
          <p id="description">${resto.description || '-'}</p> 
          
      </article>

    </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



export {
  // eslint-disable-next-line max-len
  createRestoItemTemplate, createRestoDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate,

};
