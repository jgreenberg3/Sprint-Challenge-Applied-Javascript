// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(item){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    headline.textContent = item.headline;
    authorImg.setAttribute('src', item.authorPhoto);
    authorName.textContent = item.authorName;

    return card;
}

// Create variable for 'cards-container' class to append new Cards to

const cardsContainer = document.querySelector('.cards-container');

// Make API request for new articles

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);

        for(const property in response.data.articles){
            //console.log(response.data.articles[property]);
            response.data.articles[property].map(item => {
                cardsContainer.appendChild(createCard(item));
            });       
        }
     })

    .catch(error =>{
        console.log("Error in retrieving data", error);
    });