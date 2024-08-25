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


let scrollingGrid = document.querySelector('.flow-grid');

scrollingGrid.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollingGrid.scrollBy({
      left: event.deltaY < 0 ? -80 : 80,
    });


});
  

window.onload = function() {

    let item = document.querySelectorAll('.item');
    item.forEach(div => {
        let itemChilds = div.children;
        

        for (let i = 0; i < itemChilds.length; i++) {

            let ogWidth = itemChilds[i].getBoundingClientRect().width;
            let itemWidth = Math.ceil(ogWidth);
            
            setSlidePosition(itemChilds[i], itemWidth);
            activateTranslate(itemChilds[i], div, itemWidth);
        }
    })

    function setSlidePosition(itemChilds, itemWidth) {
        itemChilds.style.transform = `translateX(${itemWidth}px)`;
    }

    function activateTranslate(itemChilds, div, itemWidth) {
        createObserver();
        function createObserver() {
            let observer;
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: .1,
            };
            observer = new IntersectionObserver(handleTranslate, options);
            observer.observe(div);
        }
        function handleTranslate(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (itemChilds.classList.contains('pre-slide-bg')) {
                        activateFirstSlide(itemChilds, itemWidth);
                        observer.unobserve(div);
                    } else {
                        activateSecondSlide(itemChilds, itemWidth);
                        observer.unobserve(div);
                    }
                }
            })
        }
    }

    function activateFirstSlide(itemChilds, itemWidth) {
        itemChilds.style.transition = 'transform .8s cubic-bezier(.6,0,.3,1)';
        itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
    }
    function activateSecondSlide(itemChilds, itemWidth) {
        itemChilds.style.transition = 'transform .8s .8s cubic-bezier(.6,0,.3,1)';
        itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
    }

}


//Script for Service Cost Alterator



const selectEl_HighLights = document.querySelector('.highlights');
let selectValue_HighLights = selectEl_HighLights.options[selectEl_HighLights.selectedIndex].value;
//[selectEl_HighLights.selectedIndex].value (gets attribute value of selected element);
const insertTotal_HighLights = document.querySelectorAll('.highlight-services .flex-end');

const selectEl_TouchUp = document.querySelector('.touch-up');
const selectValue_TouchUp = selectEl_TouchUp.options;
const insertTotal_TouchUp = document.querySelectorAll('.touch-up-services .flex-end');

const selectEl_Funky = document.querySelector('.funky');
const selectValue_Funky = selectEl_Funky.options;
const insertTotal_Funky = document.querySelectorAll('.funky-services .flex-end');

const selectEl_ClipIns = document.querySelector('.clip-ins');
const selectValue_ClipIns = selectEl_ClipIns.options;
const insertTotal_ClipIns = document.querySelectorAll('.clip-in-services .flex-end');

const selectEl_Wigs = document.querySelector('.wigs');
const selectValue_Wigs = selectEl_Wigs.options;
const insertTotal_Wigs = document.querySelectorAll('.wig-services .flex-end');

const selectEl_Weave = document.querySelector('.weave');
const selectValue_Weave = selectEl_Weave.options;
const insertTotal_Weave = document.querySelectorAll('.weave-services .flex-end');

const selectEl_Cuts = document.querySelector('.cuts');
const selectValue_Cuts = selectEl_Cuts.options;
const insertTotal_Cuts = document.querySelectorAll('.cuts-services .flex-end');

const selectEl_Styling = document.querySelector('.styling');
const selectValue_Styling = selectEl_Styling.options;
const insertTotal_Styling = document.querySelectorAll('.styling-services .flex-end');

const selectEl_MakeUp = document.querySelector('.make-up');
const selectValue_MakeUp = selectEl_MakeUp.options;
const insertTotal_MakeUp = document.querySelectorAll('.make-up-services .flex-end');

//going thru options, calling function to apply eventlistener to all

// let testing = selectEl_HighLights.children;
// for(i = 0; i < testing.length; i++) {
//     testOption = testing[i];
//     doSomething(testOption);
// }


//function applying event listeners and 
//waiting for a click to remove and apply "selected" attribute and 
//state which option has been selected and it's value

// function doSomething(testOption) {
//     testOption.addEventListener('click', () => {
//         for (i = 0; i < testing.length; i++) {
//             testing[i].removeAttribute('selected');
//         }
//         console.log(testOption);
//         testOption.setAttribute('selected', '');
//         selectValue_HighLights = selectEl_HighLights.options[selectEl_HighLights.selectedIndex].text;
//         console.log(selectValue_HighLights);
//         console.log(testOption);
//         changeColor(selectValue_HighLights);
//     })
// }

// function changeColor(selectValue_HighLights) {
//     insertTotal_HighLights.forEach(total => {
//         if (selectValue_HighLights == "Level 1") {
//             total.style.color = 'red';
//         } else if (selectValue_HighLights == "Level 2") {
//             total.style.color = 'blue';
//         } else if (selectValue_HighLights == "Level 3") {
//             total.style.color = 'green';
//         } else if (selectValue_HighLights == "Level 4") {
//             total.style.color = 'yellow';
//         } else if (selectValue_HighLights == "Level 5") {
//             total.style.color = 'orange';
//         } else if (selectValue_HighLights == "Level 6") {
//             total.style.color = 'teal';
//         } else if (selectValue_HighLights == "Level 7") {
//             total.style.color = 'purple';
//         } else if (selectValue_HighLights == "Level 8") {
//             total.style.color = 'silver';
//         }
//     })
// }


let testing = document.querySelectorAll('.skill-level-menu');

testing.forEach(menu => {
    menu.addEventListener('click', () => {
        for (i = 0; i < testing.length; i++) {
            testing[i].classList.remove('menu-entered');
        }
        menu.classList.add('menu-entered');
        let testEl = menu.children;
        for (i = 0; i < testEl.length; i++) {
            testOption = testEl[i];
            doSomething(testOption, testEl, menu);
        }
    })
})

function doSomething(testOption, testEl, menu) {
    testOption.addEventListener('click', () => {
        if (testOption.parentElement.classList.contains('menu-entered')) {
            for (i = 0; i < testEl.length; i++) {
                testEl[i].removeAttribute('selected');
            }
            testOption.setAttribute('selected', '');
            console.log(testOption);
            //i want to find the selectedIndex in the menu that contains the class menu-entered
            //and store that value into a variable
        }
    })
}


// console.log(insertTotal_Highlights);
// console.log(insertTotal_TouchUp);
// console.log(insertTotal_Funky);
// console.log(insertTotal_ClipIns);
// console.log(insertTotal_Wigs);
// console.log(insertTotal_Weave);
// console.log(insertTotal_Cuts);
// console.log(insertTotal_Styling);
// console.log(insertTotal_MakeUp);


function selectedSkillLevel() {
    //will apply "selected" attribute to element chosen
    //will clear "selected" attribute from all other options
}

function changePrices() {
    //register which element has "selected" attribute
    //calculate a total price based off the element selected (skill level)
    //Total price for Full and divide by 2 for partial
}

