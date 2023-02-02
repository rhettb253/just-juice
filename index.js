'use strict'

let itemsInCart = []
let mainCart = JSON.parse(localStorage.getItem('homeCart'));
let totalAmount = JSON.parse(localStorage.getItem('total'));
let total = 0

function Juice(name) {
    this.name = name
    total += 9
    itemsInCart.push(name)
};


if (mainCart) {
    for (let i = 0; i < mainCart.length; i++) {
        itemsInCart.push(mainCart[i])
        $('#cartItems').append(`<li>${mainCart[i]}`)

    }
    $('#total').append(`<div>$${mainCart.length * 9}`)
}

function clearCart() {
    localStorage.clear()
    itemsInCart = []
}

// Clear cart button

$('#clearCart').click(function(){
    clearCart()
    localStorage.clear()
    window.location.reload()
})

// Functionality for website clicks

$('#home').click(function () {
    window.location.href = 'index.html'
})

$('#cyo').click(function () {
    window.location.href = 'cyo.html'
})

$('#juice').click(function () {
    window.location.href = 'juice-page.html'
})

$('#cyo-extra').click(function () {
    window.location.href = 'cyo.html'
})

$('#cart').click(function () {
    window.location.href = 'cart.html'
})


$('#juiceButton').click(function(){
    itemsInCart.push(`Create Your Own`);
    localStorage.setItem('homeCart',JSON.stringify(itemsInCart))
})

$('.B1').click(function () {
    $('.B1 p').show();
    new Juice('B-1');
    total += 9
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart));
    setTimeout(function () {
        $('.B1 p').hide()
    }, 1500);
})

$('.B2').click(function () {
    $('.B2 p').show()
    new Juice('B-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.B2 p').hide()
    }, 1500);
})

$('.C1').click(function () {
    $('.C1 p').show()
    new Juice('C-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.C1 p').hide()
    }, 1500);
})

$('.CT1').click(function () {
    $('.CT1 p').show()
    new Juice('CT-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.CT1 p').hide()
    }, 1500);
})

$('.F1').click(function () {
    $('.F1 p').show()
    new Juice('F-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.F1 p').hide()
    }, 1500);
})

$('.F3').click(function () {
    $('.F3 p').show()
    new Juice('F-3')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.F3 p').hide()
    }, 1500);
})

$('.F4').click(function () {
    $('.F4 p').show()
    new Juice('F-4')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.F4 p').hide()
    }, 1500);
})

$('.G1').click(function () {
    $('.G1 p').show()
    new Juice('G-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.G1 p').hide()
    }, 1500);
})

$('.G2').click(function () {
    $('.G2 p').show()
    new Juice('G-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.G2 p').hide()
    }, 1500);
})

$('.I1').click(function () {
    $('.I1 p').show()
    new Juice('I-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.I1 p').hide()
    }, 1500);
})

$('.I2').click(function () {
    $('.I2 p').show()
    new Juice('I-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.I2 p').hide()
    }, 1500);
})

$('.R1').click(function () {
    $('.R1 p').show()
    new Juice('R-1')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.R1 p').hide()
    }, 1500);
})

$('.R2').click(function () {
    $('.R2 p').show()
    new Juice('R-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.R2 p').hide()
    }, 1500);
})

$('.C2').click(function () {
    $('.C2 p').show()
    new Juice('C-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.C2 p').hide()
    }, 1500);

})

$('.F2').click(function () {
    $('.F2 p').show()
    new Juice('F-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.F2 p').hide()
    }, 1500);
})

$('.CT2').click(function () {
    $('.CT2 p').show()
    new Juice('CT-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.CT2 p').hide()
    }, 1500);
})

$('.F2a').click(function () {
    $('.F2a p').show()
    new Juice('F-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.F2a p').hide()
    }, 1500);
})

$('.C2a').click(function () {
    $('.C2a p').show()
    new Juice('C-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.C2a p').hide()
    }, 1500);
})

$('.CT2a').click(function () {
    $('.CT2a p').show()
    new Juice('CT-2')
    localStorage.setItem('homeCart', JSON.stringify(itemsInCart))
    localStorage.setItem('total', JSON.stringify(total));
    setTimeout(function(){
        $('.CT2a p').hide()
    }, 1500);
})

// render()