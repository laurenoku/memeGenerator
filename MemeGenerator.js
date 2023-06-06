const form = document.querySelector('#memeForm');
let topText = document.querySelector('.memeTextTop')
let bottomText = document.querySelector('.memeTextBottom')
let image = document.querySelector('.imageForMeme')
let div1 = document.querySelector('.memesContainer')
let containerForMeme = document.querySelector('.container')


form.addEventListener('submit', function(event){
    event.preventDefault();
    makeMeme()
})

function makeMeme() {
//div to hold multiple memes
    let div1 = document.querySelector('.memesContainer')
    
//meme container div being created, given a class, and put within the main div called .memesContainer that holds multiple memes;
    const containerForMeme = document.createElement('div');
    containerForMeme.classList.add('container');
    div1.appendChild(containerForMeme);
//  meme image being set as background image on single meme container div;
const imgURL = image.value;
containerForMeme.style.backgroundImage = (`url(${imgURL})`);

//create hover image div;
    hoverDiv = document.createElement('div');

//adding class to hover image div;
    hoverDiv.classList.add('hoverImage');

//appending hover image div to single meme container div;
    containerForMeme.appendChild(hoverDiv);

//create top and bottom text divs for the single meme container div;
    topDiv = document.createElement('div');
    bottomDiv = document.createElement('div');
    
//adding classes to the bottom and top text divs that will appear in the single meme container div;
    topDiv.classList.add('textTop');
    bottomDiv.classList.add('textBottom');

//making the font all uppercase;
    topDiv.innerHTML = topText.value.toUpperCase();  
    bottomDiv.innerHTML = bottomText.value.toUpperCase();

//appending the top and bottom text divs to the single meme container div;
    containerForMeme.appendChild(topDiv);
    containerForMeme.appendChild(bottomDiv);

//creating event listener that removes single meme container when clicked;
    containerForMeme.addEventListener('click', function(event){
        containerForMeme.parentNode.removeChild(containerForMeme);
    })

}


