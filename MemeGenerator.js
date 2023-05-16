const form = document.querySelector('#memeForm');
let topText = document.querySelector('.memeTextTop')
let bottomText = document.querySelector('.memeTextBottom')
let image = document.querySelector('.imageForMeme')


form.addEventListener('submit', function(event){
    event.preventDefault();
    makeMeme()
})

function makeMeme() {
//div to hold multiple memes
    let div1 = document.querySelector('.memesContainer')
    
//meme container div being created, given a class, and put within the meme container
    const containerForMeme = document.createElement('div');
    containerForMeme.classList.add('container');
    div1.appendChild(containerForMeme);
//  meme image being set as background image
const imgURL = image.value;
containerForMeme.style.backgroundImage = (`url(${imgURL})`);

//create top and bottom text divs
    topDiv = document.createElement('div');
    bottomDiv = document.createElement('div');
    
//adding classes to the bottom and top divs
    topDiv.classList.add('textTop')
    bottomDiv.classList.add('textBottom')

//making the font all uppercase
    topDiv.innerHTML = topText.value.toUpperCase();  
    bottomDiv.innerHTML = bottomText.value.toUpperCase();

//appending the top and bottom text to the container div
    containerForMeme.appendChild(topDiv);
    containerForMeme.appendChild(bottomDiv);


}