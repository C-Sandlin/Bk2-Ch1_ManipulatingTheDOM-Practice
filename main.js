/* Reference first class of article__header and change text to your name */

const welcome = document.querySelector('.article__header');
const name = "Colin Sandlin";
welcome.textContent = "Welcome to the " + name + " blog";

/* Reference all article__header and add class of important */

const articleHeadEl = document.querySelectorAll('.article__header');
console.log(articleHeadEl);


for (var i = 0; i < articleHeadEl.length; i++) {
    articleHeadEl[i].classList.add("important");
} 

/* obtain reference to element with class of dashed and remove it */

const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

/* obtain reference to element with a class of article_footer and add class of goldenrod to it */

const footer = document.querySelector('.article__footer');
footer.classList.add("goldenrod");
