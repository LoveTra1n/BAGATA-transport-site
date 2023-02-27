const slideItem = document.querySelectorAll('.slide--item');
const sliderItemParent = document.querySelector('.slider--items');
const slides = document.querySelectorAll('.slides');

const hideSlides = () =>{
    console.log("1213sad")
    slides.forEach( item => {
        item.style.display = 'none';
    });
    slideItem.forEach(item =>{
        item.classList.remove('slide--item--activity');
    });
};

const showSlides = (i = 0) =>{
        slides[i].style.display = 'flex'
        slideItem[i].classList.add('slide--item--activity');
};

hideSlides()
showSlides()

sliderItemParent.addEventListener('click', (event) =>{
    const target = event.target
    if (target.classList.contains('slide--item')){
        slideItem.forEach((item, i) =>{
            if (target === item){
                console.log(i)
                hideSlides();
                showSlides(i);
            };
        });
    };
});

const openModal1 = document.querySelector('#modulBtn1');
const openModal2 = document.querySelector('#modulBtn2');
const openModal3 = document.querySelector('#modulBtn3');
const openModal4 = document.querySelector('#modulBtn4');
const openModal5 = document.querySelector('#modulBtn5');
const openModal6 = document.querySelector('#modulBtn6');
const closeModal = document.querySelector('.table-close');

const modal = document.querySelector('.modal__slide1');

openModal1.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})
openModal2.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})
openModal3.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})
openModal4.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})
openModal5.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})
openModal6.addEventListener('click', () =>{
    modal.classList.add('showModul');
    modal.classList.remove('hideModul');
    document.body.style.overflow = 'hidden';
})

closeModal.addEventListener('click', ()=>{
    modal.classList.add('hideModul');
    modal.classList.remove('showModul');
    document.body.style.overflow = '';
})
modal.addEventListener('click', (event) =>{
    if (event.target == modal){
        closeModal();
        document.body.style.overflow = ''
    }
})


const list = document.querySelector("#faqli1")
let check1= false
const hide1=()=>{
    check1=!check1
    if (check1){
        list.classList.add("faq-li")
        list.classList.remove("hide")
    } else {
        list.classList.add("hide")
        list.classList.remove("faq-li")
    }
    console.log(check1)
}


const list2 = document.querySelector("#faqli2")
let check2= false
const hide2=()=>{
    check2=!check2
    if (check2){
        list2.classList.add("faq-li")
        list2.classList.remove("hide")
    } else {
        list2.classList.add("hide")
        list2.classList.remove("faq-li")
    }
    console.log(check2)
}

const list3 = document.querySelector("#faqli3")
let check3= false
const hide3=()=>{
    check3=!check3
    if (check3){
        list3.classList.add("faq-li")
        list3.classList.remove("hide")
    } else {
        list3.classList.add("hide")
        list3.classList.remove("faq-li")
    }
    console.log(check3)
}

const list4 = document.querySelector("#faqli4")
let check4= false
const hide4=()=>{
    check4=!check4
    if (check4){
        list4.classList.add("faq-li")
        list4.classList.remove("hide")
    } else {
        list4.classList.add("hide")
        list4.classList.remove("faq-li")
    }
    console.log(check4)
}
