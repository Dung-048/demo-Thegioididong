var adressbtn=document.querySelector('#adress-form');
var adressclose=document.querySelector('#adress-close');

// console.log(adressbtn)
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none"
})

// nut truot sanpham slider product
index=0;
const rightbtn =document.querySelector('.bxs-chevron-left')
const leftbtn =document.querySelector('.bxs-chevron-right')
const imgNuber =document.querySelectorAll('.slider-product-one-content-items')
// console.log(rightbtntwo)
// console.log(leftbtntow)
// console.log(imgNubertwo)
rightbtn.addEventListener("click",function(){
    index=index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
leftbtn.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
///////////
// index=0;
// const rightbtntwo =document.querySelector('.bxs-chevron-left-two')
// const leftbtntwo =document.querySelector('.bxs-chevron-right-two')
// const imgNubertwo =document.querySelectorAll('.slider-product-two-content-items')
// // console.log(rightbtntwo)
// // console.log(leftbtntow)
// // console.log(imgNubertwo)
// rightbtntwo.addEventListener("click",function(){
//     index=index+1
//     if(index>imgNubertwo.length-1){
//         index=0
//     }
//     document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
// })
// leftbtntwo.addEventListener("click",function(){
//     index=index-1
//     if(index<=0){
//         index=imgNubertwo.length-1
//     }
//     document.querySelector(".slider-product-two-content-items-content").style.right=index *100+"%"
// })
var khoi=document.querySelector('.khoi')
window.addEventListener("scroll",function(){
    if(this.window.pageYOffset>2000)
    if (this.window.pageYOffset>khoi.offsetTop-10000){
        khoi.classList.add('dilen');

    }
})



