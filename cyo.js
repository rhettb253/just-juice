'use strict'

let formEl = document.getElementById('form');
let checkboxForm = ['fname', 'lname', 'charcoal', 'agave', 'aloevera', 'almondmilk', 'apple', 'beet', 'blackpepper', 'bluespirulina', 'carrot', 'cayenne', 'celery', 'cocoapowder', 'coconutwater', 'collard', 'cucumber', 'dates', 'ginger', 'greenpepper', 'water', 'kale', 'lemon', 'lime', 'mint', 'mustardgreens', 'orange', 'pineapple', 'parsley', 'seasalt', 'spinach', 'turmeric'];
let submitInfo = [];

formEl.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    let namef = document.querySelectorAll('input[id="fname"]')[0];
    console.log(namef.value);
    submitInfo.push(namef.value);
    let namel = document.querySelectorAll('input[id="lname"]')[0];
    console.log(namel.value);
    submitInfo.push(namel.value);
    let checkedboxes= document.querySelectorAll('input[type="checkbox"]:checked');
    // console.log(checkedboxes[0].value);
    for (let i=0; i < checkedboxes.length; i++){
        console.log(checkedboxes[i].value);
        submitInfo.push(checkedboxes[i].value);
    }
    let sectionEl = document.getElementById('createdjuice');
    sectionEl.style.display = "flex";
    let paraEl = document.createElement('p');
    let paraEl2 = document.createElement('p');
    if (submitInfo.length < 3 || namef.value.length < 2 || namel.value.length < 2){
        document.querySelector('section h3').style.display = "none";
        paraEl.textContent = 'We are missing your name and/or ingredients. Please review your submission so we can create your juice.'
        sectionEl.appendChild(paraEl);
    } else if (submitInfo.length === 3){
        paraEl.textContent = `${submitInfo[0]}'s Juice: ${submitInfo[2]}.`;
        paraEl2.textContent = "Your creation has been added to your cart!"
        sectionEl.appendChild(paraEl);
        sectionEl.appendChild(paraEl2);
    } else if (submitInfo.length === 4){
        paraEl.textContent = `${submitInfo[0]}'s Juice: ${submitInfo[2]},  ${submitInfo[3]}.`;
        paraEl2.textContent = "Your creation has been added to your cart!"
        sectionEl.appendChild(paraEl);
        sectionEl.appendChild(paraEl2);
    } else if (submitInfo.length === 5){
        paraEl.textContent = `${submitInfo[0]}'s Juice: ${submitInfo[2]},  ${submitInfo[3]}, ${submitInfo[4]}.`;
        paraEl2.textContent = "Your creation has been added to your cart!"
        sectionEl.appendChild(paraEl);
        sectionEl.appendChild(paraEl2);
    } else if (submitInfo.length === 6){
        paraEl.textContent = `${submitInfo[0]}'s Juice: ${submitInfo[2]},  ${submitInfo[3]}, ${submitInfo[4]},  ${submitInfo[5]}.`;
        paraEl2.textContent = "Your creation has been added to your cart!"
        sectionEl.appendChild(paraEl);
        sectionEl.appendChild(paraEl2);
    } else if (submitInfo.length === 7){
        paraEl.textContent = `${submitInfo[0]}'s Juice: ${submitInfo[2]},  ${submitInfo[3]}, ${submitInfo[4]},  ${submitInfo[5]},  ${submitInfo[6]}.`;
        paraEl2.textContent = "Your creation has been added to your cart!"
        sectionEl.appendChild(paraEl);
        sectionEl.appendChild(paraEl2);
    } else if (submitInfo.length > 7){
        document.querySelector('section h3').style.display = "none";
        paraEl.textContent = "You have selected too many ingredients. Please refresh and try again.";
        sectionEl.appendChild(paraEl);
    } 
    formEl.style.display = "none";
}