// RENDER CARDS DYNAMICALLY

// Create an array to store the information on the index cards
const indexCardsArray = [
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 1'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 2'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 3'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 4'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 5'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
  {
    image: 'images/snapshoot-portfolio.png',
    imagesrc: 'images/img-plaholder.png',
    imagealt: '',
    title: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components 6'],
    languages: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    live: 'https://ruthmy.github.io/portfolio/',
    github: 'https://github.com/ruthmy',
  },
];

/// //////This section is to create the cards \\\\\\\\\\\\\\\\\\\\

// Get the body element so you can show the overlay on the hole screen
const body = document.querySelector('body');

// This variable is for the cards, I'm put one by one in here and then it will be sent.
let insideCard = '';

indexCardsArray.forEach((singleCardContents) => {
  // This line let me see that I'm actually get it the array
  // and let me see each of the object rendered in the console.
  // console.log(singleCardContent);

  // Here, I put teh cards one by one in the previous empty insideCard variable.
  // This way I create the hole HTML syntax for the Recent Works section
  insideCard
        += `
        <section class="recent-works__card">    
            <div class="recent-works__img">
                <img src="${singleCardContents.imagesrc}" alt="${singleCardContents.imagealt}">
                <div div class="recent-works__info">
                    <h3 class="recent-works__title">${singleCardContents.title[0]}</h3>
                    <ul class="recent-works__tags">
                        <li class="recent-works__tag">${singleCardContents.languages[0]}</li>
                        <li class="recent-works__tag">${singleCardContents.languages[1]}</li>
                        <li class="recent-works__tag">${singleCardContents.languages[2]}</li>
                        <li class="recent-works__tag">${singleCardContents.languages[3]}</li>
                    </ul>
                    <button class="recent-works__link" href="#">See Project</button>
                </div>
            </div>
        </section>
        `;
  // uncomment the line below to see the output in the browser console.
  // console.log(insideCard);
});

// Here I get the father element by the class name
const section = document.querySelector('.recent-works__cards');

// This line is the actual render.
// Like I say the content of the variable section = insideCard result variable.
section.innerHTML = insideCard;

//--------------------------------------------------------------------------------------------------

/// //////This section is to open the modal when the user click on the See Project button\\\\\\\\\\\

const openModal = document.querySelectorAll('.recent-works__link');
for (let i = 0; i < 6; i += 1) {
  openModal[i].addEventListener('click', () => {
    // Here is the code to created the modal
    // First goes the overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    // Then comes the actual modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    // Create the HTML syntaxis for the modal
    modal.innerHTML = `
          <div class="modal-window">
              <div class="modal-header">
                  <div><button class="modal__close-button">&times;</button></div>
                  <img src="${indexCardsArray[i].image}" alt="Project" id="modal-header-img">
              </div>
              <div class="modal-body">
                  <div class="modal-title">
                      <h3>${indexCardsArray[i].title[1]}</h3>
                      <a class="modal__link link1" href="${indexCardsArray[i].live}">
                          <span>See Live</span>
                          <img src="images/see-live-icon.svg" alt="" class="modal-icon">
                      </a>
                      <a class="modal__link link2" href="${indexCardsArray[i].github}">
                          <span>See Source</span>
                          <img src="images/see-source-icon.svg" alt="" class="modal-icon">
                      </a>
                  </div>                    
              </div>
                  <h3 class="modal-title-mobile">${indexCardsArray[i].title[1]}</h3>
                  <ul class="modal__tags">
                      <li class="modal__tag">${indexCardsArray[i].languages[4]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[5]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[6]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[7]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[8]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[9]}</li>
                  </ul>
                  <ul class="modal__tags-mobile">
                      <li class="modal__tag">${indexCardsArray[i].languages[0]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[1]}</li>
                      <li class="modal__tag">${indexCardsArray[i].languages[2]}</li>
                  </ul>
                  <p class="modal-text">${indexCardsArray[i].description}</p>
                  <div class="modal-title-mobile">
                      <a class="modal__link link1" href="${indexCardsArray[i].live}">
                          <span>See Live</span>
                          <img src="images/see-live-icon.svg" alt="" class="modal-icon">
                      </a>
                      <a class="modal__link link2" href="${indexCardsArray[i].github}">
                          <span>See Source</span>
                          <img src="images/see-source-icon.svg" alt="" class="modal-icon">
                      </a>
                  </div> 
          </div>     
      `;

    // Modal will be inside the overlay
    overlay.appendChild(modal);
    // Overlay will be inside the section
    body.appendChild(overlay);

    /// ////Listener fo the close button ///////////////////
    const closeButton = document.querySelector('.modal__close-button');
    closeButton.addEventListener('click', () => {
      // Modal will be inside the overlay
      overlay.removeChild(modal);

      // Overlay will be inside the section
      body.removeChild(overlay);
    });
  });
}
