//RENDER CARDS DYNAMICALLY

//Get the father element by the class name
const section = document.querySelector('.recent-works__cards');

//Create the principal tag for cards
const card = document.createElement('section')
card.className = 'recent-works__card';

//Now create, I need to add it to the DOM
//card will be inside the main
section.appendChild(card);

//Create the HTML syntaxis for the card
card.innerHTML = `
    
        <div class="recent-works__img">
            <img src="/images/img-plaholder.png" alt="Project">
            <div class="recent-works__info">
                <h3 class="recent-works__title">ThisMulti-Post Stories Gain+Glory</h3>
                <ul class="recent-works__tags">
                    <li class="recent-works__tag">Ruby on rails</li>
                    <li class="recent-works__tag">css</li>
                    <li class="recent-works__tag">JavaScript</li>
                    <li class="recent-works__tag">html</li>
                </ul>
                <button js-modal-target class="recent-works__link" href="#">See Project</button>
            </div>
        </div>
    
`;

