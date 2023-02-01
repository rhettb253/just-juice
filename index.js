'use strict'

const itemsInCart = []

function Juice (name) {
    this.name = name
    itemsInCart.push(name)
};

$('#home').click(function(){
    window.location.href = 'index.html'
})

$('#cyo').click(function(){
    window.location.href = 'cyo.html'
})

$('#juice').click(function(){
    window.location.href = 'juice-page.html'
})

$('#cyo-extra').click(function(){
    window.location.href = 'cyo.html'
})

$('#cart').click(function(){
    window.location.href = 'cart.html'
})

$('.B1').click(function(){
    $('.B1 p').show()
    new Juice('B-1')
})

$('.B2').click(function(){
    $('.B2 p').show()
    new Juice('B-2')
})

$('.C1').click(function(){
    $('.C1 p').show()
    new Juice('C-1')
})

$('.CT1').click(function(){
    $('.CT1 p').show()
    new Juice('CT-1')
})

$('.F3').click(function(){
    $('.F3 p').show()
    new Juice('F-3')
})

$('.F4').click(function(){
    $('.F4 p').show()
    new Juice('F-4')
})

$('.G1').click(function(){
    $('.G1 p').show()
    new Juice('G-1')
})

$('.G2').click(function(){
    $('.G2 p').show()
    new Juice('G-2')
})

$('.I1').click(function(){
    $('.I1 p').show()
    new Juice('I-1')
})

$('.I2').click(function(){
    $('.I2 p').show()
    new Juice('I-2')
})

$('.R1').click(function(){
    $('.R1 p').show()
    new Juice('R-1')
})

$('.R2').click(function(){
    $('.R2 p').show()
    new Juice('R-2')
})

$('.C2').click(function(){
    $('.C2 p').show()
    new Juice('C-2')
    
})

$('.F2').click(function(){
    $('.F2 p').show()
    new Juice('F-2')
})

$('.CT2').click(function(){
    $('.CT2 p').show()
    new Juice('CT-2')
})
