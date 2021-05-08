const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('section');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
};

const intObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(pages).indexOf(entry.target)
            tabs.forEach(tab => {
                tab.classList.remove("activeTab")
            })
            tabs[index].classList.add("activeTab")
        }
    })
}, options)


pages.forEach(page => {
    intObserver.observe(page)
})

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// function callbackFunc(entries, observer) {
//     entries.forEach(entry => {

//         if (entry.isIntersecting) {
//             entry.target.classList.add("byRight")
//             intersecObserver.unobserve(entry.target);
//         }
//     });
// }
// let intersecObserver = new IntersectionObserver(callbackFunc, options);

// intersecObserver.observe(document.getElementById('aboutme'));