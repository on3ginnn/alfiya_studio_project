// let list = document.querySelectorAll(".list li");
// let box = document.querySelectorAll(".card");

// list.forEach((el)=>{
//     el.addEventListener("click" , (e)=>{
//         list.forEach((el1)=>{
//             el1.style.color = "#000";
//         })
//         e.target.style.color = "#d4a373"
//         box.forEach((el2)=>{
//             el2.style.display = "none";
//         })
//         document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
//             el3.style.display = "flex";
//         })
//     })
// })

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    slidesPerView: 8,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});