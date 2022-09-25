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

    const formData = new FormData(formElem);   
    var serialized = new URLSearchParams(formData).toString();

    let options = {
        method: 'POST'
    };

    fetch(`./mailer/smart.php?${serialized}`, options)
        .then(response => {
            if (response.ok) {
                alert('Успешно отправлено.');
            } else {
                alert(`Произошла ошибка. Код ошибки: ${response.status}`);
            }
        });
}

if (formElem.addEventListener){
    formElem.addEventListener("submit", submitCallback, false);  //Modern browsers
} else if (formElem.attachEvent){
    formElem.attachEvent('onsubmit', submitCallback);            //Old IE
}

