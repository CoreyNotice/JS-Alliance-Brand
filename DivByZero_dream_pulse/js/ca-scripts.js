var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
  let header=document.getElementById('tm-header')
  header.textContent=customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
let introHeader=document.getElementById('introheader')
introHeader.textContent=customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
let el= document.querySelectorAll('.tm-white-rect')
  for (i=0;i<el.length;i++){
    el[i].classList.add('tm-blue-rect')
    el[i].classList.remove('tm-white-rect')
  }

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
//let socialLink=document.getElementById('social-links')
document.querySelector('#social-links').style.display= 'none';
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
     let intro=document.getElementById('intropara1')
     let today = new Date().toLocaleDateString()
     intro.textContent=' 1900 Was the start off a great time period. It was the start off a great copany. And today is'+today+ ', and we are stil standing strong.';
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
         let intro2=document.getElementById('intropara2')
         intro2.textContent='With propteries all over the world, we are the leader in the hosptiality industry , with our numberous luxary hotel and resort'
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
let about=document.getElementById('aboutpara1')
about.textContent='We are about relation. We foucs on helping you relax your mind. All the timw. You work hard abd deerved to be treated kind.'
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
let about2=document.getElementById('aboutpara2')
about2.textContent='Whats life with out a vaction?'
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
let phonenum=document.getElementById('addresspara')
phonenum.textContent='(123) 456- 7890'
}; 



