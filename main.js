//navigation menu
const primaryNav = document.querySelector('.mobile-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavContainer = document.querySelector('.mobile-nav-container');
const navToggleBg = document.querySelector('.mobile-nav-toggle-bg');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        primaryNav.style.transition = "transform .3s ease-in";
    }
});

//navigation menu when scrolling down
let navObserver;
let navOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};
navObserver = new IntersectionObserver(changeNavToggle, navOptions);
navObserver.observe(primaryNavContainer);

function changeNavToggle(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            navToggleBg.classList.add('follow-nav');
        } else {
            navToggleBg.classList.remove('follow-nav');
        }
    })
} 


//Services Accordion Boxes

const accordionButtons = document.querySelectorAll('.accordion-item-btn');

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', event => {
        accordionButton.classList.toggle('active');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            if (accordionItemBody.style.maxHeight > "500px") {
                accordionItemBody.style.transitionDuration = ".4s";
            }
            
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

//Single Item Accordions for FAQ

const smallAccordionButtons = document.querySelectorAll('.single-cordion-item-btn');

smallAccordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', event => {
        accordionButton.classList.toggle('active-2');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active-2')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

//Logo carousel in Footer

const scrollers = document.querySelectorAll('.carousel');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}
function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const innerScroller = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            innerScroller.appendChild(duplicatedItem);
        })
    })
}

//Script for Image Collage
const stickySection = document.querySelector('.contents-wrap');
const scrollSection = stickySection.querySelector('.contents');
const scrollParent = document.querySelector('.lookbook-collage');
const collageGrid = document.querySelector('.size-determiner');

// seting responsive for horizontal scroller
window.addEventListener('resize', resizeCollage);

function resizeCollage() {
    let sizeOfCollage = scrollSection.offsetWidth;
    console.log(sizeOfCollage);
    
    scrollParent.style.height = sizeOfCollage + 'px';
}
resizeCollage();

// getting container to translate left once we've hit a certain point
window.addEventListener('scroll', () => {
    transform(stickySection);
})

function transform(stickySection) {
    const offsetTop = stickySection.parentElement.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vh, 0, 0)`;
}

// //Creating observers and handling translate slides


// let item = document.querySelectorAll('.item');
// let slideContainer = document.querySelector('.contents-wrap');
// createSlideObserver();
// function createSlideObserver() {
//     let observerOne;
//     let optionsOne = {
//         root: null,
//         rootMargin: '0px',
//         threshold: .6
//     };
//     observerOne = new IntersectionObserver(primeCollage, optionsOne);
//     observerOne.observe(slideContainer);
// }
// function primeCollage(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             activateCollage();
//             observer.unobserve(slideContainer);
//         }
//     })
// }
// function activateCollage() {
//     item.forEach(div => {
//         let itemChilds = div.children;
    
//         for (let i = 0; i < itemChilds.length; i++) {
//             let ogWidth = itemChilds[i].getBoundingClientRect().width;
//             let itemWidth = Math.ceil(ogWidth);
    
//             setSlidePosition(itemChilds[i], itemWidth);
//             activateTranslate(itemChilds[i], div, itemWidth);
//         }
//     })
//     function setSlidePosition(itemChilds, itemWidth) {
//         itemChilds.style.transform = `translateX(${itemWidth}px)`;
//     }
//     function activateTranslate(itemChilds, div, itemWidth) {
//         createItemObserver();
//         function createItemObserver() {
//             let observerTwo;
//             let optionsTwo = {
//                 root: null,
//                 rootMargin: '0px',
//                 threshold: .1,
//             };
//             observerTwo = new IntersectionObserver(handleTranslate, optionsTwo);
//             observerTwo.observe(div);
//         }
//         function handleTranslate(entries, observer) {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     if (itemChilds.classList.contains('pre-slide-bg')) {
//                         activateFirstSlide(itemChilds, itemWidth);
//                         observer.unobserve(div);
//                     } else {
//                         activateSecondSlide(itemChilds, itemWidth);
//                         observer.unobserve(div);
//                     }
//                 }
//             })
//         }
//     }
//     function activateFirstSlide(itemChilds, itemWidth) {
//         itemChilds.style.opacity = '.2';
//         itemChilds.style.transition = 'transform .8s cubic-bezier(.6,0,.3,1)';
//         itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
//     }
//     function activateSecondSlide(itemChilds, itemWidth) {
//         itemChilds.style.opacity = '1';
//         itemChilds.style.transition = 'transform .8s .8s cubic-bezier(.6,0,.3,1)';
//         itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
//     }
// }

//Script for Service Cost Alterator
// let testing = document.querySelectorAll('.skill-level-menu');

// testing.forEach(menu => {
//     menu.addEventListener('click', () => {
//         for (i = 0; i < testing.length; i++) {
//             testing[i].classList.remove('menu-entered');
//         }
//         menu.classList.add('menu-entered');
//         let testEl = menu.children;
//         identifyMenuOptionsSelected(testEl, menu);
//     })
// })
// function identifyMenuOptionsSelected(testEl, menu) {
//     menu.addEventListener('change', () => {
//         selectedOption = menu.options[menu.selectedIndex];
//         if (selectedOption.parentElement.classList.contains('menu-entered')) {
//             for (i = 0; i < testEl.length; i++) {
//                 testEl[i].removeAttribute('selected');
//             }
//             selectedOption.setAttribute('selected', '');
//             selectedOptionValue = menu.options[menu.selectedIndex].text;
//             targetTotalDivs(selectedOptionValue, menu);
//         }
//     })
// }
// function targetTotalDivs(selectedOptionValue, menu) {
//     let boopie = menu.parentElement.nextElementSibling.children;

//     for (i = 0; i < boopie.length; i++) {
//         let flexEnd = boopie[i].children;
//         for (j = 0; j < flexEnd.length; j++) {
//             if (flexEnd[j].classList.contains('flex-end')) {
//                 let targetFlexEnd = flexEnd[j];
//                 determinePrice(targetFlexEnd, selectedOptionValue);
//             }
//         }
//     }
// }
// //determining the increase of the price based on level here
// function determinePrice(targetFlexEnd, selectedOptionValue) {
//     for (k = 1; k <= 4; k++) {
//         if (selectedOptionValue == 'Level' + ' ' + `${k}`) {
//             determineOptionPrices(targetFlexEnd);

//             let returnValue = determineOptionPrices(targetFlexEnd);

//             if (targetFlexEnd.classList.contains('two-price')) {
//                 let fullPrice = returnValue[0] * k;
//                 let partialPrice = returnValue[1] * k;
//                 if (targetFlexEnd.classList.contains('minimum-price')) {
//                     let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
//                     applyPrices(price, targetFlexEnd);
//                 } else {
//                     let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
//                     applyPrices(price, targetFlexEnd);
//                 }
//             } else {
//                 if (targetFlexEnd.classList.contains('minimum-price')) {
//                     returnValue = '$' + `${returnValue * k}` + '+';
//                     applyPrices(returnValue, targetFlexEnd);
//                 } else {
//                     returnValue = '$' + `${returnValue * k}`;
//                     applyPrices(returnValue, targetFlexEnd);
//                 }
//             }
//         }
//     }
    
// }
//determining base price here
function determineOptionPrices(targetFlexEnd) {
    if (targetFlexEnd.classList.contains('highlight-price')) {
        let fullPrice = 4;
        let partialPrice = 2;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('balayage-price')) {
        let fullPrice = 2;
        let partialPrice = 1;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('foil-price')) {
        let fullPrice = 3;
        let partialPrice = 1.50;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('roots-price')) {
        let fullPrice = 5;
        let partialPrice = 2.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('gray-price')) {
        let price = 1;
        return price;
    } else if (targetFlexEnd.classList.contains('unicorn-price')) {
        let fullPrice = 3;
        let partialPrice = 1.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('mermaid-price')) {
        let fullPrice = 7;
        let partialPrice = 3.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('custom-price')) {
        let fullPrice = 5;
        let partialPrice = 2.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('lace-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('seamless-price')) {
        let fullPrice = 8;
        let partialPrice = 4;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('halos-price')) {
        let fullPrice = 4;
        let partialPrice = 2;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('pony-price')) {
        let fullPrice = 11;
        let partialPrice = 5.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('bangs-price')) {
        let fullPrice = 3;
        let partialPrice = 1.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('lace-wig-price')) {
        let price = 10;
        return price;
    } else if (targetFlexEnd.classList.contains('mono-wig-price')) {
        let price = 8;
        return price;
    } else if (targetFlexEnd.classList.contains('combo-wig-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('capless-wig-price')) {
        let price = 12;
        return price;
    } else if (targetFlexEnd.classList.contains('trad-weave-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('full-weave-price')) {
        let price = 13;
        return price;
    } else if (targetFlexEnd.classList.contains('part-weave-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('vixen-weave-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('versa-weave-price')) {
        let fullPrice = 2;
        let partialPrice = 1;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('0-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('45-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('90-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('180-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('trim-price')) {
        let price = 1;
        return price;
    } else if (targetFlexEnd.classList.contains('volume-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('straight-price')) {
        let price = 4;
        return price;
    } else if (targetFlexEnd.classList.contains('curls-price')) {
        let price = 6;
        return price;
    } else if (targetFlexEnd.classList.contains('braid-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('education-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('bridal-price')) {
        let price = 14;
        return price;
    } else if (targetFlexEnd.classList.contains('bach-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('fx-price')) {
        let price = 16;
        return price;
    }
}
// actually implementing the pricing innerHTML here
function applyPrices(returnValue, targetFlexEnd) {
    targetFlexEnd.innerHTML = returnValue;
}
