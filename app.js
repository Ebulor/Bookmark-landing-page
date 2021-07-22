const toggle = document.querySelectorAll(".toggle");
const nav = document.querySelector(".navbar");

toggle.forEach((item)=>{
    item.addEventListener("click", ()=>{
        nav.classList.toggle("open-nav");
    })
})

//add active class to tab link

const tab_active = document.querySelectorAll(".tab-link");
const feature_h = document.querySelector(".feature-text h2");
const feature_p = document.querySelector(".feature-text p");
const feature_img = document.querySelector(".feature-img img");

tab_active.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
        tab_active.forEach((tab)=>{
            tab.classList.remove("active");                   
        })
        tab.classList.add("active");        
    })
});



const bookmark = document.querySelector(".bookmark");
const searching = document.querySelector(".searching");
const sharing = document.querySelector(".sharing");


bookmark.addEventListener("click", ()=>{
    feature_img.src="images/illustration-features-tab-1.svg"
    feature_h.innerText = "Bookmark in one click";
    feature_p.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
})
searching.addEventListener("click", ()=>{
    feature_img.src="images/illustration-features-tab-2.svg"
    feature_h.innerText = "Intelligent search";
    feature_p.innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
})
sharing.addEventListener("click", ()=>{
    feature_img.src="images/illustration-features-tab-3.svg"
    feature_h.innerText = "Share your bookmarks";
    feature_p.innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
})



//open accordion

const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow");



questions.forEach((question) => {
    question.addEventListener("click", (event) => {       
        const answers = question.nextElementSibling;
        question.classList.toggle('accordion-active');

        if(question.classList.contains('accordion-active')){
           answers.style.display = "block";            
          }
          else{
            answers.style.display = "none";            
          }
    });
});

//valiade mail


const input = document.querySelector(".input");
const form = document.querySelector(".form");
const error_icon = document.querySelector(".error-icon");
const error_message = document.querySelector(".error-message");
const email = document.querySelector("form input");
const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener("submit", (e) => {
    
  
    if (!emailExpression.test(email.value)) {
      error_icon.classList.add("error");
      error_message.classList.add("error");
      input.classList.add("error");
      e.preventDefault();
    } else {
      error_icon.classList.remove("error");
      error_message.classList.remove("error");
      input.classList.remove("error");
      e.currentTarget.submit();
    }
  });





