const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("#top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 900) {
        backToTop.classList.add('shown');
    } else {
        backToTop.classList.remove('shown');
    } 
});

// const observer = new IntersectionObserver((enteries, observer) => {
//     enteries.forEach(entry => {
//         if (entry.isIntersecting){
//             backToTop.style.visibility = 'visible';
//         } else {
//             backToTop.style.visibility = 'hidden';
//         } 
//     })
// })

observer.observe(observerTarget);