const ratingNum = document.querySelectorAll('.btn');

const selected = document.querySelector("#selected");

const butonlar = document.querySelectorAll(".btn");
for(let i = 0; i < butonlar.length; i++)
butonlar[i].addEventListener("click", function(){
    butonlar[0].classList.remove("active");
    butonlar[1].classList.remove("active");
    butonlar[2].classList.remove("active");
    butonlar[3].classList.remove("active");
    butonlar[4].classList.remove("active");
    butonlar[i].classList.add("active");
    selected.innerHTML = i+1
});


//! toggle yerine add yazarsam yaptığım işlemi geri alamam

const bölüm1 = document.querySelector(".sec1");
const bölüm2 = document.querySelector(".sec2");
const select1 = document.querySelector(".selectbtn");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(){
    bölüm1.classList.add("visibility");
    bölüm2.classList.remove("visibility")
});

select1.addEventListener("click", function(){
    bölüm1.classList.remove("visibility");
    bölüm2.classList.add("visibility")
});



// for (let i = 0; i < ratingNum.length; i++) {
    
// ratingNum[i].addEventListener('click', function(){
//     ratingNum[i].classList.add('active');
//     selected.innerHTML = i+1

// })
// }
