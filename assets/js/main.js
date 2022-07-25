//    for day and date
var date = new Date();
const elementDate = document.getElementById("printDate");
const elementDay = document.getElementById("printDay");
const elementTime = document.getElementById("printTime");
const listOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function printDate() {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  elementDate.innerHTML = day + " / " + month + " / " + year;
}

function printDay() {
  date = new Date();
  var numberOfDay = date.getDay();
  var day = listOfDays[numberOfDay];
  elementDay.innerHTML = day;
}

function printTime() {
  date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours > 12) {
    hours = hours - 12;
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  PM ";
  } else if (hours < 12) {
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  AM ";
  } else if (hours = 12) {
    elementTime.innerHTML = hours + " : " + minutes + " : " + seconds + "  PM ";
  }
}

setInterval(function () {
  printTime();
  printDate();
  printDay();
}, 1000);



//  fix navbar

$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('nav').addClass('fixed-header');
    $('nav div').addClass('visible-title');
  }
  else {
    $('nav').removeClass('fixed-header');
    $('nav div').removeClass('visible-title');
  }
});



// banner text

$(function () {
  $(".banner-title-animation").typed({
    strings: [" Tokkie Shuttle Services ", " Tokkie Shuttle Services "],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: false,
    loop: true
  });
});

$(function () {
  $(".aboutus-title-animation").typed({
    strings: [" About US .", " About US ."],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: false,
    loop: true
  });
});

$(function () {
  $(".services-title-animation").typed({
    strings: [" Services .", "  Services."],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: false,
    loop: true
  });
});


$(function () {
  $(".rate-title-animation").typed({
    strings: [" -Schedules.", "  -Schedules."],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: false,
    loop: true
  });
});

$(function () {
  $(".online-title-animation").typed({
    strings: [" - Booking.", "  -  Booking."],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 1500,
    showCursor: false,
    loop: true
  });
});


// card slider

$('.Scheduled-info-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
})




// Responsive navbar
function toggleNavBar() {

  console.log("hii")
  var headerRight = document.getElementById('headerRightformobile');

  console.log(headerRight.style.display, 'headerRight.style.display')

  headerRight.classList.toggle("header-for-mobile");
}





// Accordion with symbols
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



//           winshoek_slider

var owl = $('.windhoek-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:4,
          nav:false
      },
      1000:{
          items:7,
          nav:true,
          loop:false
      }
  }
});



var owl = $('.gaborone-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:4,
          nav:false
      },
      1000:{
          items:7,
          nav:true,
          loop:false
      }
  }
});






$("#contact").click(function() {  
  $("#box form").toggle("slow");
  return false;
});





// contact form

let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");



function validate1(){
    spanNode1.innerHTML=" ";
    let fname=fnameNode.value;
    if(fname=='')
    {
        spanNode1.innerHTML="This field is required";
        fnameNode.style.border="1px solid red";
        return false;
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="space is not allowed";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green"; 
        return true;
    }
}
let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");

function validate2(){
    spanNode2.innerHTML=" ";
    let lname=lnameNode.value;
    if(lname=='')
    {
        spanNode2.innerHTML="This field is required";
        lnameNode.style.border="1px solid red";
        return false;
    }
    else if(lname.includes(' ')){
        spanNode2.innerHTML="space is not allowed";
        lnameNode.style.border="2px solid red";
        return false;
    }
    else{
        lnameNode.style.border="2px solid green"; 
        return true;
    }
}



let  emailNode=document.getElementById("mailID");
let spanNode5=document.getElementById("error5");

function validate5(){
    spanNode5.innerHTML="";
    let emailId=emailNode.value;
    let subs=emailId.substring(emailId.indexOf('@')+1);
    if( emailId=='')
    {
        spanNode5.innerHTML="This field is required";
        emailNode.style.border="1px solid red";
        return false;
    }
    else if(!emailId.includes('@')|| subs==''){
        spanNode5.innerHTML="Invalid";
        emailNode.style.border="2px solid red";
        return false;
    }
    
    else{
        emailNode.style.border="2px solid green"; 
        return true;
    }
}

let ageNode=document.getElementById("age");
let spanNode6=document.getElementById("error6");

function validate6(){
    spanNode6.innerHTML=" ";
    let age=ageNode.value;
    if(age=='')
    {
        spanNode6.innerHTML="This field is required";
        ageNode.style.border="1px solid red";
        return false;
    }
    else if(isNaN(age)||age<1||age>100){
        spanNode6.innerHTML="The age must be a number between 1 and 100";
        ageNode.style.border="2px solid red";
        return false;
    }
    else{
        ageNode.style.border="2px solid green"; 
        return true;
    }
}

let mobilenoNode=document.getElementById("mobileno");
let spanNode7=document.getElementById("error7");

function validate7(){
    spanNode7.innerHTML="";
    let mobileno=mobilenoNode.value;
    let regExp = new RegExp(" /^[7-9][0-9]{9}$/");
    console.log(mobileno);
    console.log(regExp.test(mobileno));

    if( mobileno=='')
    {
        spanNode7.innerHTML="Please enter your Mobile No";
        mobilenoNode.style.border="1px solid red";
        return false;
    }
    else if(mobileno.length<10 || mobileno.length>10  ){
        spanNode7.innerHTML=" Mobile No. is not valid, Please Enter 10 Digit Mobile No.";
        mobilenoNode.style.border="2px solid red";
        return false;
    }
    else if(regExp.test(mobileno))
    {
        spanNode7.innerHTML="Mobile No should be correct";
        mobilenoNode.style.border="2px solid red";
        return false;
    }
    else{
        mobilenoNode.style.border="2px solid green"; 
        return true;
    }
}


function validateform(){
    let v1=validate1();
    let v2=validate2();
    let v5=validate5();
    let v6=validate6();
    let v7=validate7();
    alert(v1&&v2&&v3&&v4&&v5&&v6&&v7)
    
    return(v1&&v2&&v3&&v4&&v5&&v6&&v7);
  
}