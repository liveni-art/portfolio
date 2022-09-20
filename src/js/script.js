// menu
const hamburgerElem = document.querySelector(".hamburger");
const menuElem = document.querySelector(".menu");
const menuOverlayElem = document.querySelector(".menu__overlay");
const closeElem = document.querySelector(".menu__close");

function openMenu() {
    menuElem.classList.add("active");
}

function closeMenu() {
    menuElem.classList.remove("active");
}

hamburgerElem.addEventListener('click', () => {
    openMenu();
});

closeElem.addEventListener('click', () => {
    closeMenu();
});

const menuItems = document.querySelectorAll(".menu__link > a");
menuItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

// close menu on click out of menu
document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = (target === menuElem || menuElem.contains(target)) && target !== menuOverlayElem;
    const its_btnMenu = target === hamburgerElem || hamburgerElem.contains(target);
    const menu_is_active = menuElem.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        closeMenu();
    }
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

