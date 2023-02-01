'use strict'

let formEl = document.getElementById('form');
let checkboxForm = ['fname', 'lname', 'charcoal', 'agave', 'aloevera', 'almondmilk', 'apple', 'beet', 'blackpepper', 'bluespirulina', 'carrot', 'cayenne', 'celery', 'cocoapowder', 'coconutwater', 'collard', 'cucumber', 'dates', 'ginger', 'greenpepper', 'water', 'kale', 'lemon', 'lime', 'mint', 'mustardgreens', 'orange', 'pineapple', 'parsley', 'seasalt', 'spinach', 'turmeric'];

formEl.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    // console.log(event.target);
    let names = document.querySelectorAll('input[type="text"]');
    console.log(names);
    let checkedboxes= document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedboxes);
    // for (i=0; i <)
}

