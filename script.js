// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.

let balloon = document.getElementById("balloon");


function growBalloon(event) {
//i had to use google to figure out why it would change pixels to 0, it had to do with my previous code being a string so i had to get do the window.getComptuedStyle (which i knew nothing about) and also use parseFloat (also knew nothing about) and then i had an issue with nothing happening, but it turns out it has to be made back to a string hence the concatenation. very hard especially since I didnt have any resources aside from google, and I feel like googling stuff is kind of cheating, since i think it should be all available through the lecture material, but i didnt have access to linked in learning so it had to be done
    if (event.key === "ArrowUp") {
        let currentSize =  window.getComputedStyle(balloon).fontSize;
        let sizeNum = parseFloat(currentSize);
        
        let newSize = sizeNum * 1.1;

        balloon.style.fontSize = newSize + "px";
        event.preventDefault();
    }
    //console.log(startingSizeNum); test to see if it still says starting size or not for pop function
    console.log(popLimit);
}
//after you do it first time its easy the 2nd time
function shrinkBalloon(event) {
    if (event.key === "ArrowDown") {
        let currentSize = window.getComputedStyle(balloon).fontSize;

        let sizeNum = parseFloat(currentSize);

        let newSize = sizeNum * .9;

        balloon.style.fontSize = newSize + "px";
        event.preventDefault();
    }
}
document.addEventListener("keydown", growBalloon);
document.addEventListener("keydown", shrinkBalloon);

// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
let startingSize = window.getComputedStyle(balloon).fontSize
let startingSizeNum = parseFloat(startingSize);

let popLimit = startingSizeNum * 5;
console.log(startingSizeNum);
function popBalloon(event) {
    if (event.key === "ArrowUp") {
        let currentSize = window.getComputedStyle(balloon).fontSize;
        let sizeNum = parseFloat(currentSize);

        if (sizeNum >= popLimit) {
            balloon.innerHTML = "💥"
        }
    }
}

document.addEventListener("keydown", popBalloon);
// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
