const hamburgerElem = document.querySelector(".hamburger");
const menuElem = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburgerElem.addEventListener('click', () => {
    menuElem.classList.add("active");
});

closeElem.addEventListener('click', () => {
    menuElem.classList.remove("active");
});

const percents = document.querySelectorAll('.scale__percents');
const lines = document.querySelectorAll('.scale__percents-line span');
percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

var formElem = document.querySelector(".contacts__form");

var submitCallback = (e) => {
    e.preventDefault();

    var data = new FormData(formElem);
    
    let options = {
        method: 'POST',
        data: data,
        headers: {}
    };

    fetch('./mailer/smart.php', options)
        .then(response => {
            // console.log(JSON.stringify(response));
            return response.json();
        })
        .then(body => {
            console.log(body);
            // Do something with body
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

if (formElem.addEventListener){
    formElem.addEventListener("submit", submitCallback, false);  //Modern browsers
} else if (formElem.attachEvent){
    formElem.attachEvent('onsubmit', submitCallback);            //Old IE
}